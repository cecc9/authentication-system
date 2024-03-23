'use server';

import { cookies } from 'next/headers';

import { LoginFormSchema } from '@/validations/login-form-schema';
import { ZodError } from 'zod';
import { AuthStatusType } from '@/types/auth-status';
import { createClient } from '@/supabase/server';

export const signInAction = async (
    prevState: AuthStatusType | null,
    formdata: FormData
): Promise<AuthStatusType> => {
    try {
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { email, password } = LoginFormSchema.parse({
            password: formdata.get('password'),
            email: formdata.get('email'),
        });

        const {
            data: { user, session },
            error,
        } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return {
                status: 'error',
                message: error.message,
            };
        }

        // si todo salio bien en el login, no es necesario retornar nada, porque se va a redirigir a la pagina de dashboard
        // asi que podria retornar un null
        // tambien recordar que devuelve el user y el session, si es necesario se puede guardar en un estado global
        // return {
        //     status: 'success',
        //     message: `Welcome, ${formdata.get('email')}!`,
        // };
        return null;
    } catch (error) {
        if (error instanceof ZodError) {
            // console.log('errorthis: ', error.issues[0].path[0]);
            return {
                status: 'error',
                message: 'Invalid form data',
                errors: error.issues.map((issue) => ({
                    path: issue.path[0] as string,
                    message: `Server validation: ${issue.message}`,
                })),
            };
        }

        return {
            status: 'error',
            message: 'Something went wrong. Please try again.',
        };
    }

    // return {
    //     status: 'success',
    //     message: `Welcome, ${formdata.get('username')} ${formdata.get(
    //         'email'
    //     )}!`,
    // };
};
