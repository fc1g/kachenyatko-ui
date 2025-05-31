import { AuthForm } from '../components/features';
import { loginFormFields } from './data';

export default function page() {
  return (
    <AuthForm
      actionType="Login"
      actionDescription="Don't have an account?"
      formFields={loginFormFields}
    />
  );
}
