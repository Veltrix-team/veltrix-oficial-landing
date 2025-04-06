import { defineAction } from "astro:actions";
import { Resend } from "resend";
import MessageEmail from "../emails/MessageEmail";
import { render } from "@react-email/components";
import { z } from "astro:schema";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {


    send: defineAction({
        accept: "form",
        input: z.object({

            name: z.string({
                required_error: 'El nombre de usuario es requerido',
            }),

            email: z.string().email("Email invalido"),

            message: z.string({
                required_error: 'El mensaje es requerido',
            }),
            subject: z.string().optional()

        }),
        handler: async ({ name, email, message, subject = "Sin asunto" }) => {

            //Crear email   
            const emailContent = MessageEmail({
                name,
                email,
                message,
                subject

            });

            const html = await render(emailContent);
            const text = await render(emailContent, {
                plainText: true
            });

            //enviar un email
            const { data, error } = await resend.emails.send({
                from: "onboarding@resend.dev",  // Dominio de prueba de Resend
                to: ["hello.veltrix@gmail.com"],
                subject,
                html,
                text
            });

            if (error) {
                console.error("Error al enviar el email:", error);
                throw new Error("Error al enviar el email");
            }

            return { data, sucess: true }; // Retorna la data del email enviado
        }
    })
}