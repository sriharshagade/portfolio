"use client";

import { useState, useRef } from "react";
import { Send, AlertCircle, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

const fields = [
  { id: "name", label: "Name", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "company", label: "Company (Optional)", type: "text", required: false },
  { id: "subject", label: "Subject", type: "text", required: true },
];

type FieldErrors = Record<string, string>;
type SubmissionState = "idle" | "validating" | "submitting" | "success" | "error";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};

  const name = (formData.get("name") as string)?.trim();
  if (!name) {
    errors.name = "Name is required";
  }

  const email = (formData.get("email") as string)?.trim();
  if (!email) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  const subject = (formData.get("subject") as string)?.trim();
  if (!subject) {
    errors.subject = "Subject is required";
  }

  const message = (formData.get("message") as string)?.trim();
  if (!message) {
    errors.message = "Message is required";
  }

  return errors;
}

function Field({
  id,
  label,
  type,
  required,
  error,
  disabled,
}: {
  id: string;
  label: string;
  type: string;
  required: boolean;
  error?: string;
  disabled?: boolean;
}) {
  return (
    <div className="space-y-1">
      <label className="font-mono text-xs uppercase tracking-wider text-text-muted" htmlFor={id}>
        {label}
      </label>
      <input
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={`focus-ring w-full border-0 border-b bg-transparent px-0 py-3 text-on-surface outline-none transition-colors placeholder:text-transparent disabled:opacity-60 ${
          error
            ? "border-error/70 focus:border-error"
            : "border-outline-variant/70 focus:border-primary"
        }`}
        disabled={disabled}
        id={id}
        name={id}
        placeholder={label}
        required={required}
        type={type}
      />
      {error && (
        <p className="flex items-center gap-1 font-mono text-xs text-error" id={`${id}-error`}>
          <AlertCircle className="size-3" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const submissionTimeRef = useRef<number>(0);

  function handleValidationError(errors: FieldErrors) {
    setFieldErrors(errors);
    setMessage({ type: "error", text: "Please fix the errors above" });
    setState("error");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      handleValidationError(errors);
      return;
    }

    setState("submitting");
    setFieldErrors({});
    setMessage(null);
    submissionTimeRef.current = Date.now();

    abortControllerRef.current?.abort();
    abortControllerRef.current = new AbortController();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Server error: ${response.status}`);
      }

      const result = await response.json();

      setState("success");
      setMessage({ type: "success", text: result.message || "Message sent successfully!" });
      formRef.current?.reset();

      setTimeout(() => {
        if (state === "success") {
          setState("idle");
          setMessage(null);
        }
      }, 5000);
    } catch (error) {
      const isAborted = error instanceof Error && error.name === "AbortError";
      const errorMessage = isAborted
        ? "Request timed out. Please check your connection and try again."
        : error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";

      setState("error");
      setMessage({ type: "error", text: errorMessage });
    }
  }

  const isDisabled = state === "submitting" || state === "success";

  return (
    <>
      <form className="mt-4 flex flex-col gap-8" onSubmit={handleSubmit} ref={formRef}>
        {fields.map((field) => (
          <Field
            key={field.id}
            {...field}
            disabled={isDisabled}
            error={fieldErrors[field.id]}
          />
        ))}
        <div className="space-y-1">
          <label className="font-mono text-xs uppercase tracking-wider text-text-muted" htmlFor="message">
            Message
          </label>
          <textarea
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            aria-invalid={!!fieldErrors.message}
            className={`focus-ring min-h-28 w-full resize-y border-0 border-b bg-transparent px-0 py-3 text-on-surface outline-none transition-colors placeholder:text-transparent disabled:opacity-60 ${
              fieldErrors.message
                ? "border-error/70 focus:border-error"
                : "border-outline-variant/70 focus:border-primary"
            }`}
            disabled={isDisabled}
            id="message"
            name="message"
            placeholder="Tell me about your project"
            required
          />
          {fieldErrors.message && (
            <p className="flex items-center gap-1 font-mono text-xs text-error" id="message-error">
              <AlertCircle className="size-3" />
              {fieldErrors.message}
            </p>
          )}
        </div>
        <Button
          className="self-start uppercase tracking-wider"
          disabled={isDisabled}
          size="lg"
          type="submit"
          variant="primary"
        >
          {state === "submitting" && "Sending..."}
          {state === "success" && "Sent!"}
          {state !== "submitting" && state !== "success" && "Send Message"}
          <Send aria-hidden="true" className="size-4" />
        </Button>
      </form>
      {message && (
        <div
          className={`mt-4 flex items-start gap-3 rounded-lg px-4 py-3 font-mono text-sm ${
            message.type === "success"
              ? "bg-primary/10 text-primary"
              : "bg-error/10 text-error"
          }`}
          role="alert"
        >
          {message.type === "success" ? (
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          ) : (
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}
    </>
  );
}
