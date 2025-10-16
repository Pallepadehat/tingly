import { Resend } from "resend";
import { WaitlistConfirmationEmail } from "@/components/emails/waitlist-confirmation";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send a waitlist confirmation email to a new signup
 * @param email - The email address to send to
 * @param position - The user's position in the waitlist
 * @returns Promise with email send result
 */
export async function sendWaitlistConfirmationEmail(
  email: string,
  position: number
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Tingly <onboarding@tingly.app>", // Update this to your verified domain
      to: [email],
      subject: `You're on the Tingly waitlist! 🎉`,
      react: WaitlistConfirmationEmail({ email, position }),
    });

    if (error) {
      console.error("Error sending waitlist email:", error);
      throw new Error(`Failed to send email: ${error.message}`);
    }

    return data;
  } catch (error) {
    console.error("Error in sendWaitlistConfirmationEmail:", error);
    throw error;
  }
}
