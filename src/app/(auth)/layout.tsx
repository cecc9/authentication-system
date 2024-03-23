import { ReactNode, Fragment } from 'react';
import { redirect } from 'next/navigation';

import { getSessionClient } from '@/actions/auth/get-session';
import NavbarAuth from '@/components/navbar/navbar-auth';

interface AuthLayoutProps {
    children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    // aqui comprobar la session del usuario (dudando si lo hago aqui)
    // const { session } = await getSessionClient();

    // console.log('render layout auth...');
    // if (session) {
    //     // cuando hay session se vuelve a renderizar esto, y redirige a dashboard, por eso la pantalla en blanco...
    //     return redirect('/dashboard');
    // }

    return (
        <Fragment>
            <NavbarAuth />
            {children}
        </Fragment>
    );
}
