'use client';

import { useFormState } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormReset } from 'react-hook-form';
import { z } from 'zod';

import AuthPreferenceWithEmail from '../auth-preference-with-email';
import { AuthStatusType } from '@/types/auth-status';
import { signUpAction } from '@/actions/auth/sign-up';
import { RegisterFormSchema } from '@/validations/register-form-schema';
import RegisterFormContent from './register-form-content';
import { useSetErrorHandling } from '@/hooks/use-set-error-handling';

const RegisterFormWithEmail = () => {
    const [state, formAction] = useFormState<AuthStatusType, FormData>(
        signUpAction,
        null
    );

    const {
        register,
        formState: { errors, isValid },
        setError,
        reset,
    } = useForm<z.infer<typeof RegisterFormSchema>>({
        mode: 'all',
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            repeatPassword: '',
        },
    });

    useSetErrorHandling({
        state,
        setError,
        AuthSchema: RegisterFormSchema,
        reset,
    });

    return (
        <AuthPreferenceWithEmail
            redirectPath='/register'
            title='Bienvenido!'
            description='Registrate con tu correo electronico.'
        >
            <form action={formAction} className='space-y-6'>
                <RegisterFormContent
                    register={register}
                    errors={errors}
                    isValid={isValid}
                />
            </form>
        </AuthPreferenceWithEmail>
    );
};

export default RegisterFormWithEmail;
