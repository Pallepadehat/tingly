import WaitlistConfirmationEmail from "@/components/emails/waitlist-confirmation";

const Email = () => {
  return <WaitlistConfirmationEmail email="test@test.com" position={1} />;
};

export default Email;
