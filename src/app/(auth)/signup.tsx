import { AuthSignUpForm } from "@/features/Auth";
import { SafeArea } from "@/components/SafeArea/SafeArea";

export default function SignUpScreen() {
  return (
    <SafeArea bottom>
      <AuthSignUpForm />
    </SafeArea>
  );
}
