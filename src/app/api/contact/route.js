import { z } from "zod";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (!resend) {
      return Response.json(
        { message: "Message received (email provider not configured yet)." },
        { status: 200 },
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Portfolio contact from ${data.name}`,
      replyTo: data.email,
      text: data.message,
    });

    return Response.json(
      { message: "Thanks! Your message was sent." },
      { status: 200 },
    );
  } catch (error) {
    return Response.json(
      { message: "Could not send message. Please try again." },
      { status: 400 },
    );
  }
}
