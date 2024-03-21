import EmailAuthWithButton from '@/components/auth/email-auth-with-button';
import AuthPreferencePanel from '@/components/auth/auth-preference-panel';

const LoginPage = () => {
    return (
        <AuthPreferencePanel title='Iniciar sesión en SimpleLife'>
            <EmailAuthWithButton
                pathRedirect='/login/email'
                title='Continuar con Email'
            />
        </AuthPreferencePanel>
    );
};

export default LoginPage;
