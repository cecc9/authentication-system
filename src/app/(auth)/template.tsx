import { ReactNode } from 'react';

interface AuthTemplateProps {
    children: ReactNode;
}

export default function AuthTemplate({ children }: AuthTemplateProps) {
    // aqui poner todo el template de pantalla completa y en el centro

    return (
        <div className='max-w-screen-xl w-full mx-auto flex flex-1 justify-center items-center'>
            {children}
        </div>
    );
}
