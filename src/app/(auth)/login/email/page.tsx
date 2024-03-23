import React, { Fragment } from 'react';

import LoginFormWithEmail from '@/components/auth/login/login-form-with-email';
import { getSessionClient } from '@/actions/auth/get-session';
import { redirect } from 'next/navigation';

const EmailLoginPage = async () => {
    const { session } = await getSessionClient();

    if (session) {
        return redirect('/dashboard');
    }

    return (
        <div>
            <LoginFormWithEmail />
        </div>
    );
};

export default EmailLoginPage;
