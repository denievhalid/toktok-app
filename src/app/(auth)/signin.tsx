import { AuthSignInForm } from "@/features/Auth";
import { SafeArea } from "@/components/SafeArea/SafeArea";

export default function SignInScreen() {
  return (
    <SafeArea bottom>
      <AuthSignInForm />
    </SafeArea>
  );
}
