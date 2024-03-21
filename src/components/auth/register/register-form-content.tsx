import LoadingIcon from '@/components/icons/loading-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RegisterFormSchema } from '@/validations/register-form-schema';
import { ErrorMessage } from '@hookform/error-message';
import React, { Fragment } from 'react';
import { useFormStatus } from 'react-dom';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { z } from 'zod';

interface Props {
    register: UseFormRegister<z.infer<typeof RegisterFormSchema>>;
    isValid: boolean;
    errors: FieldErrors<z.infer<typeof RegisterFormSchema>>;
}

const RegisterFormContent = ({ errors, isValid, register }: Props) => {
    const { pending } = useFormStatus();

    return (
        <Fragment>
            <div className='flex flex-col gap-2'>
                <Input
                    placeholder='Nombre de usuario'
                    {...register('username')}
                    className='mb-1'
                    autoComplete='off'
                />
                <Label className='text-destructive'>
                    <ErrorMessage name='username' errors={errors} />
                </Label>
            </div>

            <div className='flex flex-col gap-2'>
                <Input
                    type='email'
                    placeholder='Correo Electronico'
                    {...register('email')}
                    className='mb-1'
                    autoComplete='off'
                />
                <Label className='text-destructive'>
                    <ErrorMessage name='email' errors={errors} />
                </Label>
            </div>

            <div className='flex flex-col gap-2'>
                <Input
                    type='password'
                    placeholder='Contraseña'
                    {...register('password')}
                    className='mb-1'
                    autoComplete='off'
                />
                <Label className='text-destructive'>
                    <ErrorMessage name='password' errors={errors} />
                </Label>
            </div>

            <div className='flex flex-col gap-2'>
                <Input
                    type='password'
                    placeholder='Repetir contraseña'
                    {...register('repeatPassword')}
                    className='mb-1'
                    autoComplete='off'
                />
                <Label className='text-destructive'>
                    <ErrorMessage name='repeatPassword' errors={errors} />
                </Label>
            </div>

            <Button
                type='submit'
                className='flex w-full'
                disabled={pending || !isValid}
            >
                {pending ? <LoadingIcon /> : 'Registrarse'}
            </Button>
        </Fragment>
    );
};

export default RegisterFormContent;
