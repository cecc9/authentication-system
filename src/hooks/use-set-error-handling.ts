import { useEffect } from 'react';
import { FieldPath, UseFormReset, UseFormSetError } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

import { AuthStatusType } from '@/types/auth-status';
import { LoginFormSchema } from '@/validations/login-form-schema';
import { RegisterFormSchema } from '@/validations/register-form-schema';

interface Props {
    state: AuthStatusType;
    setError: UseFormSetError<
        z.infer<typeof LoginFormSchema | typeof RegisterFormSchema>
    >;
    AuthSchema: z.Schema<
        z.infer<typeof LoginFormSchema | typeof RegisterFormSchema>
    >;
    reset?: () => void;
}

export const useSetErrorHandling = ({
    state,
    setError,
    AuthSchema,
    reset,
}: Props) => {
    console.log('render custom hook');

    useEffect(() => {
        if (!state) {
            return;
        }

        // aqui disparar los toast

        if (state.status === 'error') {
            console.log('si entra cuando hay error');
            toast.error(state.message);

            state.errors?.map((error) =>
                setError(error.path as FieldPath<z.infer<typeof AuthSchema>>, {
                    message: error.message,
                })
            );

            reset && reset();
        }

        // ya no entra por aqui porque se redirige
        if (state.status === 'success') {
            // alert(state.message);
            console.log('message success: ', state.message);
            toast.success(state.message, { duration: 5000 });
        }
    }, [state, setError, reset]);
};
