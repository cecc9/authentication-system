import { getSessionClient } from '@/actions/auth/get-session';
import AuthPreferencePanel from '@/components/auth/auth-preference-panel';
import EmailAuthWithButton from '@/components/auth/email-auth-with-button';
import { redirect } from 'next/navigation';

const RegisterPage = async () => {
    const { session } = await getSessionClient();

    if (session) {
        return redirect('/dashboard');
    }

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
