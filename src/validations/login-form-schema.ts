import { z } from 'zod';

export const LoginFormSchema = z.object({
    email: z
        .string()
        .min(1, { message: 'El correo electronico es requerido' })
        .email('El correo electronico no es valido'),
    password: z
        .string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;
