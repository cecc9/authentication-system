import { ReactNode } from 'react';

interface MainTemplateProps {
    children: ReactNode;
}

export default function MainTemplate({ children }: MainTemplateProps) {
    // aqui poner todo el template de pantalla completa y en el centro
    // se puede borrar items-center para que el contenido ocupe todo el alto

    return (
        <div className='max-w-screen-xl w-full mx-auto flex flex-1 justify-center items-center p-5'>
            {children}
        </div>
    );
}
