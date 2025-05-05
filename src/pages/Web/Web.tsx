import { Footer, Nav, Tecnologias, Whatsapp } from '../../components';
import styles from './Web.module.css'

import image   from "../../assets/images/Plataforma/image.png"
import bnf__01 from "../../assets/images/Plataforma/img--01.png"
import bnf__02 from "../../assets/images/Plataforma/img--02.png"
import bnf__03 from "../../assets/images/Plataforma/img--03.png"
import bnf__04 from "../../assets/images/Plataforma/img--04.png"
import bnf__05 from "../../assets/images/Plataforma/img--05.png"
import bnf__06 from "../../assets/images/Plataforma/img--06.png"

const Web = ()=>{
    return (
        <>
            <Whatsapp/>
            <Nav/>
            <div className={styles.header}>
                <div className="container">
                    <h1 id='title' className={styles.title}>Plataformas Web que Impulsan tu Negocio</h1>
                    <p>Creamos plataformas web adaptadas a las necesidades específicas de tu negocio, asegurando una experiencia de usuario fluida y optimizada. Nuestras soluciones son modulares, escalables y pensadas para crecer contigo, ofreciendo todo lo necesario para que tu presencia en línea sea un verdadero motor de éxito.</p>
                    <Tecnologias/>
                </div>
            </div>
            <main>
                <section className={`section ${styles.section__images}`}>
                    <div className="container">
                        <img src={image} alt="" />
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
                                        <h3>Aumento de Ventas</h3>
                                        <p>Al ofrecer una plataforma fácil de usar y optimizada para la conversión, las empresas experimentan un aumento de hasta un 35% en sus ventas online gracias a una mejor experiencia de compra.</p>
                                    </div>
                                    <div className={styles.card__img}>
                                        <img src={bnf__01} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__info}>
                                        <h3>Mejora en la retención de usuarios</h3>
                                        <p>Una plataforma con funcionalidades avanzadas y un diseño atractivo mejora la satisfacción del usuario, lo que puede traducirse en un 25% más de retención de clientes a largo plazo.</p>
                                    </div>
                                    <div className={styles.card__img}>
                                        <img src={bnf__02} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`bd-gradient ${styles.card}`}>
                                <div className={styles.card__content}>
                                    <div className={styles.card__info}>
                                        <h3>Reducción de tiempos operativos</h3>
                                        <p>La automatización de pagos, reservas y gestión de inventarios permite a las empresas reducir hasta un 30% del tiempo en operaciones manuales, mejorando la eficiencia.</p>
                                    </div>
                                    <div className={styles.card__img}>
                                        <img src={bnf__03} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`bd-gradient ${styles.card__optimizacion}`}>
                            <div className={styles.card__content}>
                                <h3>Optimización en la tasa de conversión</h3>
                                <p>Con un diseño optimizado para SEO y la integración de estrategias de marketing digital, las plataformas no solo aumentan la visibilidad online, sino que también mejoran la experiencia del usuario, lo que facilita la conversión de visitantes en clientes. Este enfoque puede resultar en un incremento de hasta un 20% en la tasa de conversión, maximizando el retorno de inversión y generando un crecimiento continuo para el negocio.</p>
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
export default Web;