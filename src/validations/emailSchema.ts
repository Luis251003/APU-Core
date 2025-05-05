import {z} from 'zod'

export const emailSchema = z.object({
    name: z
        .string()
        .regex(/^[a-zA-ZAEIOUáéíóúüñ\s]{3,25}$/,{message:"Caracteres de 3 a 25 letras"}),
    email: z
        .string()
        .email({message:"Formato de correo incorrecto"}),
    message: z
        .string()
        .min(10,{message:"Mínimo de 10 caracteres"})
        .max(70,{message:"Máximo de 70 caracteres"})

})