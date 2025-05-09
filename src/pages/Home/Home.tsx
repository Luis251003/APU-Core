import styles from "./Home.module.css"
import { Footer, Nav, Tecnologias, Whatsapp } from "../../components";

import bnf__01 from '../../assets/images/Home/image-5.png'
import bnf__02 from '../../assets/images/Home/image-3.png'
import bnf__03 from '../../assets/images/Home/image-6.png'
import bnf__04 from '../../assets/images/Home/image-1.png'
import bnf__05 from '../../assets/images/Home/image-2.png'
import bnf__06 from '../../assets/images/Home/image-4.png'

import image from '../../assets/images/Home/image.png'

import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <>
            <Whatsapp/>
            <Nav/>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Dale un escalón más a tu negocio con soluciones tecnológicas hechas a tu medida. ¡Contáctanos hoy!</h1>
                    <p>Creamos plataformas web y apps móviles que impulsan tu crecimiento digital. Desde el diseño hasta el desarrollo, combinamos tecnología, funcionalidad y escalabilidad para que tu negocio crezca sin límites.</p>
                    <Link to="/Contacto">Contactar</Link>
                    <Tecnologias/>
                </div>
            </header>
            <main>
                <section className={`section ${styles.section__beneficios}`}>
                    <div className="container">
                        <p>GENERA BENEFICIOS DENTRO DEL MUNDO DIGIAL</p>
                        <h2 className={styles.title}>Impulsa tu negocio al mundo digital y desbloquea todo su potencial</h2>
                        <div className={styles.cards}>
                            <div className={`sp-2 ${styles.card} bd-gradient`}>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>Aumento en ventas</h3>
                                    <p>Con una plataforma accesible 24/7, tus productos o servicios llegan a más clientes en cualquier momento, mejorando la conversión y aumentando las ventas, especialmente en mercados globales.</p>
                                    <img src={bnf__01} alt="" />
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>Disponibilidad Constante</h3>
                                    <p>Los usuarios pueden acceder a tu negocio en cualquier lugar y a cualquier hora, sin las limitaciones físicas de una tienda tradicional, ampliando tus oportunidades de negocio.</p>
                                    <img src={bnf__02} alt="" />
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>Automatización de Procesos</h3>
                                    <p>Las plataformas digitales permiten automatizar desde el pago hasta la gestión de inventarios, reduciendo errores humanos y liberando tiempo para que te concentres en lo que realmente importa: hacer crecer tu negocio.</p>
                                    <img src={bnf__03} alt="" />
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>Mejor experiencia para el usuario</h3>
                                    <p>Una plataforma bien diseñada y fácil de usar mejora la satisfacción del cliente, asegurando que tu audiencia se quede más tiempo y regrese con frecuencia. Todo desde un diseño intuitivo hasta un proceso de compra sencillo.</p>
                                    <img src={bnf__04} alt="" />
                                </div>
                            </div>
                            <div className={`sp-2 ${styles.card} bd-gradient`}>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>Datos para tomar mejores decisiones</h3>
                                    <p>Al tener acceso a analíticas detalladas, puedes entender mejor el comportamiento de tus clientes, lo que te permitirá tomar decisiones informadas, personalizar ofertas y mejorar tus estrategias.</p>
                                    <img src={bnf__05} alt="" />
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <h3 className={styles.card__title}>Posicionamiento y diferenciación</h3>
                                    <p>Tener una plataforma o app digital te posiciona como una empresa moderna, innovadora y confiable, lo que te da una ventaja sobre la competencia tradicional que no ha dado el salto a lo digital.</p>
                                    <img src={bnf__06} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`section ${styles.section__ventajas}`}>
                    <div className="container">
                        <div className={styles.ventajas__content}>
                            <div className={styles.ventajas__text}>
                                <h2 className={styles.title}>Haz de tu negocio una experiencia digital que habla por tu marca</h2>
                                <ul>
                                    <li>Diseños a la medida de tu marca Interfaz visual coherente con tu identidad, para destacar desde el primer momento.</li>
                                    <li>Tu plataforma se ve y funciona perfecto en cualquier dispositivo: móvil, tablet o desktop.</li>
                                    <li>Menos clics, más resultados. Lo simple y efectivo es lo que convierte.</li>
                                    <li>Ofrece recomendaciones, promociones o funcionalidades adaptadas al comportamiento del usuario.</li>
                                    <li>Una experiencia de usuario positiva es el mejor catalizador para construir una relación a largo plazo con tus clientes.</li>
                                </ul>
                            </div>
                            <div className={styles.ventajas__img}>
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`section ${styles.section__cards}`}>
                    <div className="container">
                        <div className={styles.cards}>
                            <div className={`${styles.card} bd-gradient`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__img}>
                                        <i className="fa-solid fa-database"></i>
                                    </div>
                                    <h2 className={styles.card__title}>Optimización de la Tasa de Conversión (CRO)</h2>
                                    <p>El diseño UX se enfoca en optimizar cada punto de contacto con el usuario, desde el primer clic hasta la acción final (como una compra o suscripción).</p>
                                </div>
                            </div>
                            <div className={`${styles.card} bd-gradient`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__img}>
                                        <i className="fa-solid fa-desktop"></i>
                                    </div>
                                    <h2 className={styles.card__title}>Reducción de la Tasa de Abandono</h2>
                                    <p>Con un diseño intuitivo y fácil de usar, es posible reducir la tasa de abandono de usuarios que inician un proceso (como llenar un carrito de compras) pero que lo dejan incompleto.</p>
                                </div>
                            </div>
                            <div className={`${styles.card} bd-gradient`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__img}>
                                        <i className="fa-solid fa-heart"></i>
                                    </div>
                                    <h2 className={styles.card__title}>Fidelización a Largo Plazo</h2>
                                    <p>Un diseño UX bien ejecutado no solo aumenta las conversiones inmediatas, sino que también juega un papel crucial en la fidelización de clientes.</p>
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

export default Home;