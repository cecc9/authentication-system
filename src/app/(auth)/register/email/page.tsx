import { getSessionClient } from '@/actions/auth/get-session';
import RegisterFormWithEmail from '@/components/auth/register/register-form-with-email';
import { redirect } from 'next/navigation';
import React from 'react';

const EmailRegisterPage = async () => {
    const { session } = await getSessionClient();

    if (session) {
        return redirect('/dashboard');
    }

    return <RegisterFormWithEmail />;
};

export default EmailRegisterPage;
