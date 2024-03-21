import AuthPreferencePanel from '@/components/auth/auth-preference-panel';
import EmailAuthWithButton from '@/components/auth/email-auth-with-button';

const RegisterPage = () => {
    return (
        <AuthPreferencePanel title='Regístrate en SimpleLife'>
            <EmailAuthWithButton
                pathRedirect='/register/email'
                title='Continuar con Email'
            />
        </AuthPreferencePanel>
    );
};

export default RegisterPage;
