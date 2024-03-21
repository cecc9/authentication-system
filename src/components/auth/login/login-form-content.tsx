import { LoginFormSchema } from '@/validations/login-form-schema';
import { useFormStatus } from 'react-dom';

import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Fragment } from 'react';
import { Label } from '@/components/ui/label';
import LoadingIcon from '@/components/icons/loading-icon';

interface Props {
    register: UseFormRegister<z.infer<typeof LoginFormSchema>>;
    isValid: boolean;
    errors: FieldErrors<z.infer<typeof LoginFormSchema>>;
}

const LoginFormContent = ({ isValid, register, errors }: Props) => {
    const { pending } = useFormStatus();

    return (
        <Fragment>
            <div className='flex flex-col gap-2'>
                <Input
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

            <Button
                type='submit'
                className='w-full flex'
                disabled={pending || !isValid}
            >
                {pending ? <LoadingIcon /> : 'Iniciar sesión'}
            </Button>
        </Fragment>
    );
};

export default LoginFormContent;
