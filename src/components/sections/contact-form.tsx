"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "company", label: "Company (Optional)", type: "text" },
  { id: "subject", label: "Subject", type: "text" },
];

function Field({ id, label, type }: { id: string; label: string; type: string }) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant/60" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full border-0 border-b border-outline-variant/70 bg-transparent px-0 py-3 text-on-surface outline-none transition-colors placeholder:text-transparent focus:border-primary focus:ring-0"
        id={id}
        name={id}
        placeholder={label}
        type={type}
      />
    </div>
  );
}

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        e.currentTarget.reset();
      } else {
        setMessage({ type: "error", text: result.error || "Failed to send message" });
      }
    } catch {
      setMessage({ type: "error", text: "An error occurred. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form className="mt-4 flex flex-col gap-8" onSubmit={handleSubmit}>
        {fields.map((field) => <Field key={field.id} {...field} />)}
        <div className="space-y-2">
          <label className="font-mono text-xs uppercase tracking-wider text-on-surface-variant/60" htmlFor="message">
            Message
          </label>
          <textarea
            className="min-h-28 w-full resize-y border-0 border-b border-outline-variant/70 bg-transparent px-0 py-3 text-on-surface outline-none transition-colors placeholder:text-transparent focus:border-primary focus:ring-0"
            id="message"
            name="message"
            placeholder="Tell me about your project"
            required
          />
        </div>
        <Button
          className="self-start uppercase tracking-wider"
          disabled={isLoading}
          size="lg"
          type="submit"
          variant="primary"
        >
          {isLoading ? "Sending..." : "Send Message"}
          <Send aria-hidden="true" className="size-4" />
        </Button>
      </form>
      {message && (
        <div
          className={`mt-4 rounded-lg px-4 py-3 font-mono text-sm ${
            message.type === "success"
              ? "bg-primary/10 text-primary"
              : "bg-error/10 text-error"
          }`}
        >
          {message.text}
        </div>
      )}
    </>
  );
}
