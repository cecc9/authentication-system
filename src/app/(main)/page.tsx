import { NextIcon } from '@/components/icons/next-icon';
import { SupabaseIcon } from '@/components/icons/supabase-icon';
import Image from 'next/image';

const HomePage = () => {
    // tambien es bueno agregar un template para tener un ancho maximo de 1280px

    return (
        <div className='w-full h-full flex justify-center items-center flex-col gap-7'>
            <h2 className='text-3xl font-semibold text-center'>
                Sistema de Autenticacion
            </h2>
            <div className='flex gap-5'>
                <NextIcon />
                <SupabaseIcon />
            </div>
            <p className='max-w-2xl text-base text-center italic'>
                Sistema de autenticación utilizando Next.js 14 con Typescript,
                Shadcn UI, Tailwind, React Hook Form, Zod para las validaciones
                de formularios y Supabase para manejar el backend. permite a los
                usuarios registrarse e iniciar sesión (Email, Google, Github).
            </p>
        </div>
    );
};

export default HomePage;
