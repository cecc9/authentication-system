import EmailAuthWithButton from '@/components/auth/email-auth-with-button';
import AuthPreferencePanel from '@/components/auth/auth-preference-panel';
import { getSessionClient } from '@/actions/auth/get-session';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
    const { session } = await getSessionClient();

    if (session) {
        return redirect('/dashboard');
    }

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
