import styles from './Mobile.module.css'
import { Footer, Nav, Tecnologias, Whatsapp } from "../../components";

import images from "../../assets/images/Aplicaciones/image 341.png"
import bnf__01 from "../../assets/images/Aplicaciones/image-4.png"
import bnf__02 from "../../assets/images/Aplicaciones/image-5.png"
import bnf__03 from "../../assets/images/Aplicaciones/image-3.png"
import bnf__04 from "../../assets/images/Aplicaciones/image.png"
import bnf__05 from "../../assets/images/Aplicaciones/image-1.png"
import bnf__06 from "../../assets/images/Aplicaciones/image-2.png"

const Mobile = ()=>{
    return (
        <>
            <Whatsapp/>
            <Nav/>
            <div className={styles.header}>
                <div className="container">
                    <h1 id='title' className={styles.title}>Aplicaciones Móviles a Medida</h1>
                    <p>Las aplicaciones móviles permiten una interacción constante con tus usuarios. Desarrollamos apps nativas o híbridas, optimizadas para ofrecer una experiencia fluida y eficiente, mejorando la fidelidad del cliente y optimizando los procesos de tu negocio.</p>
                    <Tecnologias/>
                </div>
            </div>
            <main>
                <section className={`section ${styles.section__images}`}>
                    <div className="container">
                        <img src={images} alt="" />
                    </div>
                </section>
                <section className={`section ${styles.section__beneficios}`}>
                    <div className="container">
                        <p>GENERA BENEFICIOS DENTRO DEL MUNDO DIGIAL</p>
                        <h2 id='title' className={styles.title}> Impacto en Conversiones y Mejoras Tangibles</h2>
                        <div className={styles.cards}>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__info}>
                                        <h3>Aumento de conversiones</h3>
                                        <p>Las apps móviles bien diseñadas incrementan la tasa de conversión de usuarios, ya que permiten una experiencia de compra más sencilla y directa. ¡Hasta un 30% más de conversiones!</p>
                                    </div>
                                    <div className={styles.card__img}>
                                        <img src={bnf__01} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__info}>
                                        <h3>Mayor retención de clientes</h3>
                                        <p>Las notificaciones push y las funcionalidades personalizadas aumentan la interacción continua, lo que resulta en un 40% más de fidelidad de tus usuarios.</p>
                                    </div>
                                    <div className={styles.card__img}>
                                        <img src={bnf__02} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__info}>
                                        <h3>Accesibilidad constante</h3>
                                        <p>Una app disponible 24/7 mejora la accesibilidad y el contacto con los clientes, lo que se traduce en mayor volumen de ventas durante todo el día.</p>
                                    </div>
                                    <div className={styles.card__img}>
                                        <img src={bnf__03} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`bd-gradient ${styles.card__optimizacion}`}>
                            <div className={styles.card__content}>
                                <h3>Optimización de procesos</h3>
                                <p>Al integrar funciones clave como pagos, seguimiento de pedidos y soporte al cliente en una sola plataforma, las aplicaciones móviles optimizan los procesos operativos, lo que permite reducir los tiempos de espera en un 25% y agiliza la gestión, mejorando la eficiencia y la experiencia del usuario.</p>
                                <div className={styles.card__images}>
                                    <img src={bnf__04} alt="" />
                                    <img src={bnf__05} alt="" />
                                    <img src={bnf__06} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
export default Mobile;