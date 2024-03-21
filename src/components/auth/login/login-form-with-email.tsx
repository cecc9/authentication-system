'use client';

import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { signInAction } from '@/actions/auth/sign-in';
import { LoginFormSchema } from '@/validations/login-form-schema';
import LoginFormContent from './login-form-content';

import AuthPreferenceWithEmail from '../auth-preference-with-email';
import { useSetErrorHandling } from '@/hooks/use-set-error-handling';
import { AuthStatusType } from '@/types/auth-status';

const LoginFormWithEmail = () => {
    const [state, formAction] = useFormState<AuthStatusType, FormData>(
        signInAction,
        null
    );

    const {
        register,
        formState: { errors, isValid },
        setError,
    } = useForm<z.infer<typeof LoginFormSchema>>({
        mode: 'all',
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            password: '',
            email: '',
        },
    });

    useSetErrorHandling({ state, setError, AuthSchema: LoginFormSchema });

    return (
        <AuthPreferenceWithEmail
            redirectPath='/login'
            title='Bienvenido de nuevo!'
            description='Inicia sesión con tu correo electronico.'
        >
            <form action={formAction} className='space-y-6'>
                <LoginFormContent
                    register={register}
                    errors={errors}
                    isValid={isValid}
                />
            </form>
        </AuthPreferenceWithEmail>
    );
};

export default LoginFormWithEmail;
