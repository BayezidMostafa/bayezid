import { z } from "zod";

export const contactSchema = z.object({
  userName: z.string().min(1, "Name is required"),
  userEmail: z.string().email("Invalid email address"),
  userMessage: z.string().min(1, "Message is required"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
