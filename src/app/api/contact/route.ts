import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to your Zoho inbox
    await transporter.sendMail({
      from: `"Sriharsha Gade" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Portfolio Contact - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message received. I&apos;ll get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}
