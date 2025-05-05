import { Footer, Nav, Whatsapp } from '../../components';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import styles from './Contacto.module.css'
import img__tree from '../../assets/images/Contacto/image 18.png'
import { emailSchema } from '../../validations/emailSchema';
import { sendEmailJS } from '../../services/email';
import { useRef } from 'react';

const Contacto = ()=>{

    const formRef = useRef<HTMLFormElement>(null);

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(emailSchema)
    });    
    
    const handleSuccess = (message: string) => {
        toast.info(message,{
            theme:"colored"
        });
    };
    
    const handleError = (error: string) => {
        toast.error(error,{
            theme:"colored"
        });
    };

    const onSubmit = () =>{
        sendEmailJS(formRef,handleSuccess,handleError)
    }

    return(
        <>
            <ToastContainer />
            <Whatsapp/>
            <Nav/>
            <section className={`section ${styles.section__contacto}`}>
                <div className="container">
                    <div className={styles.contacto__container}>
                        <div className={styles.contacto__info}>
                            <h1 className={styles.title}>Rellena el formulario y da el primer paso hacia tu solución digital</h1>
                            <p>Queremos conocer tu proyecto y  tus metas. Completa el formulario con tus datos y nos pondremos en contacto contigo. ¡En Apu Core estamos listos para construir contigo!</p>
                            <form ref={formRef} className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={`${errors.name && styles.form__group__error} ${styles.form__group}`}>
                                    <label htmlFor="name">Nombre Completo</label>
                                    <input id='name' {...register("name")} type="text" placeholder='Escribe tu nombre'/>
                                    <p className={styles.error__message}>{errors.name ? errors.name.message:''}</p>
                                </div>
                                <div className={`${errors.email && styles.form__group__error} ${styles.form__group}`}>
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input id='email' {...register("email")} type="email" placeholder='Escribe tu Correo Electrónico'/>
                                    <p className={styles.error__message}>{errors.email ? errors.email.message:''}</p>
                                </div>
                                <div className={`${errors.message && styles.form__group__error} ${styles.form__group}`}>
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea id="message" {...register("message")} placeholder='Escribe tu mensaje'></textarea>
                                    <p className={styles.error__message}>{errors.message ? errors.message.message:''}</p>
                                </div>
                                <div className={styles.form__group}>
                                    <button className={styles.btn__enviar} type='submit'>Enviar mensaje</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.contacto__img}>
                            <div className={styles.img__container}>
                                <img src={img__tree} alt="" />
                            </div>
                            <Link to="mailto:apucore.peru@gmail.com" className={styles.link__email}><i className="fa-solid fa-envelope"></i> Apucore.peru@gmail.com</Link>
                            <ul>
                                <li><Link to="https://www.instagram.com/apucore.peru/" target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link to="https://www.tiktok.com/@apucore.peru"><i className="fa-brands fa-tiktok"></i></Link></li>
                                <li><Link to=""><i className="fa-brands fa-x-twitter"></i></Link></li>
                                <li><Link to="https://www.linkedin.com/company/107208254/admin/dashboard/" target='_blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Contacto;