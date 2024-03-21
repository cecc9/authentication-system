'use server';

import { cookies, headers } from 'next/headers';
import { createClient } from '@/supabase/server';

import { sleep } from '@/lib/sleep';
import { AuthStatusType } from '@/types/auth-status';
import { RegisterFormSchema } from '@/validations/register-form-schema';
import { ZodError } from 'zod';

export const signUpAction = async (
    prevState: AuthStatusType | null,
    formdata: FormData
): Promise<AuthStatusType> => {
    try {
        const origin = headers().get('origin');
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { email, password, username } = RegisterFormSchema.parse({
            username: formdata.get('username'),
            email: formdata.get('email'),
            password: formdata.get('password'),
            repeatPassword: formdata.get('repeatPassword'),
        });

        // aqui llamar al servicio de auth.supabase (email, password)

        const {
            data: { user, session },
            error,
        } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { username },
                emailRedirectTo: `${origin}/auth/callback`,
            },
        });

        console.log('user', user, 'session', session, 'error', error);

        if (error) {
            return {
                status: 'error',
                message: error.message,
            };
        }

        if (user && !session) {
            return {
                status: 'success',
                message: `Hemos enviado un mensaje de confirmación a su correo, ${email}. revisa tu bandeja de entrada.`,
            };
        }

        return {
            status: 'success',
            message: `Welcome, ${formdata.get('username')}!`,
        };
    } catch (error) {
        console.log('error1', error);

        if (error instanceof ZodError) {
            // console.log('errorthis: ', error.issues[0].path[0]);

            console.log('error2', error);

            return {
                status: 'error',
                message: 'Invalid form data', // change message
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
};
