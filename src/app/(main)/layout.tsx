import { Fragment, ReactNode } from 'react';

import { getSessionClient } from '@/actions/auth/get-session';
import { getUserClient } from '@/actions/auth/get-user';
import { signOutAction } from '@/actions/auth/sign-out';
import Navbar from '@/components/navbar/navbar';

interface MainLayoutProps {
    children: ReactNode;
}

export default async function MainLayout({ children }: MainLayoutProps) {
    const { session } = await getSessionClient();
    const { user } = await getUserClient();

    return (
        <Fragment>
            <Navbar
                session={session}
                user={user}
                signOutAction={signOutAction}
            />
            {children}
        </Fragment>
    );
}
