import { AuthForm } from '../components/features';
import { signupFormFields } from './data';

export default function page() {
  return (
    <AuthForm
      actionType="Signup"
      actionDescription="Already have an account?"
      formFields={signupFormFields}
    />
  );
}
