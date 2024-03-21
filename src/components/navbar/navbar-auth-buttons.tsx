'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const NavbarAuthButtons = () => {
    const pathname = usePathname();
    const router = useRouter();

    const goToRegister = () => {
        router.push('/register');
    };

    const goToLogin = () => {
        router.push('/login');
    };

    switch (pathname) {
        case '/login':
        case '/login/email': {
            return (
                <div className='flex'>
                    <Button variant='outline' onClick={goToRegister}>
                        Registrarse
                    </Button>
                </div>
            );
        }

        case '/register':
        case '/register/email': {
            return (
                <div className='flex'>
                    <Button variant='outline' onClick={goToLogin}>
                        Iniciar sesión
                    </Button>
                </div>
            );
        }

        default: {
            return (
                <div className='flex gap-2'>
                    <Button variant='outline' onClick={goToLogin}>
                        Iniciar sesión
                    </Button>
                    <Button variant='default' onClick={goToRegister}>
                        Registrarse
                    </Button>
                </div>
            );
        }
    }
};

export default NavbarAuthButtons;
