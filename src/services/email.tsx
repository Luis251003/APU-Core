import emailjs from 'emailjs-com';
import { RefObject } from 'react';

export const sendEmailJS = 
    (
      formRef: RefObject<HTMLFormElement>,
      onSuccess?: (msg: string) => void,
      onError?: (err: string) => void
    ): void => {
    if (!formRef.current) return;

    emailjs.sendForm('service_5w7lzns', 'template_i1gu4om',formRef.current, 'ezw5Jug9vird-p2MQ')
    .then(
      (result) => {
        console.log("Mensaje enviado", result.text);
        if (onSuccess) onSuccess("Mensaje enviado con éxito");
      },
      (error) => {
        console.error("Error al enviar", error.text);
        if (onError) onError("Error al enviar correo");
      }
    );
  
};