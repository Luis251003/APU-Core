import styles from './Nosotros.module.css'
import { Footer, Nav, Whatsapp } from "../../components";

import logo from "../../assets/images/Nosotros/image 342.png"
import bnf__01 from "../../assets/images/Nosotros/image.png"
import bnf__02 from "../../assets/images/Nosotros/image-1.png"
import bnf__03 from "../../assets/images/Nosotros/image-2.png"
import bnf__04 from "../../assets/images/Nosotros/image-3.png"
import bnf__05 from "../../assets/images/Nosotros/image-4.png"
import bnf__06 from "../../assets/images/Nosotros/image-5.png"

const Nosotros = ()=>{
    return(
        <>
            <Whatsapp/>
            <Nav/>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.header__img}>
                        <img src={logo} alt="" />
                    </div>
                    <p className={styles.header__text}>
                        En Apu Core transformamos ideas en soluciones tecnológicas innovadoras. Somos una empresa especializada en el desarrollo de software a medida, diseño de productos digitales y servicios de branding, con un enfoque ágil, creativo y centrado en el cliente. Nos mueve la mejora continua, el aprendizaje constante y el compromiso con resultados que marcan la diferencia. Acompañamos a nuestros clientes desde la conceptualización hasta la implementación, asegurando calidad, eficiencia y un trato humano en cada proyecto.
                    </p>
                    <div className={styles.header__button}>
                        <a href="" className={styles.btn__contactar}>Contactar</a>
                    </div>
                </div>
            </header>
            <main>
                <section className={`section ${styles.section__beneficios}`}>
                    <div className="container">
                        <p>GENERA BENEFICIOS DENTRO DEL MUNDO DIGIAL</p>
                        <h2 id='title' className={styles.title}>Beneficios de trabajar con APU core</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={bnf__01} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Comunicación constante y transparente</h3>
                                    <p>Mantenemos una comunicación fluida en cada etapa del proyecto para asegurar que tus ideas se entiendan y se transformen en soluciones reales. Cada avance se valida contigo, evitando sorpresas y fortaleciendo la confianza.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={bnf__02} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Soluciones 100% personalizadas</h3>
                                    <p>Diseñamos software y servicios a la medida de tus procesos y objetivos. Nos aseguramos de entender tu negocio para entregarte una herramienta funcional, eficiente y totalmente alineada con tus necesidades.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={bnf__03} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Validación temprana con prototipos</h3>
                                    <p>Antes de programar, te mostramos prototipos visuales (mockups o wireframes) que permiten visualizar el producto final y hacer ajustes estratégicos. Esto reduce errores, ahorra tiempo y mejora los resultados finales.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={bnf__04} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Entregas ágiles y enfocadas en resultados</h3>
                                    <p>Utilizamos metodologías ágiles que permiten entregas parciales y funcionales a corto plazo. Así, puedes ver avances reales y participar activamente en la evolución del proyecto.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={bnf__05} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Servicios integrales en un solo lugar</h3>
                                    <p>Además del desarrollo de software, ofrecemos diseño de marca, creación de páginas web, apps y material publicitario. Centralizar estos servicios mejora la coherencia visual y ahorra tiempo en tu estrategia digital.</p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={bnf__06} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3>Compromiso con la calidad y la innovación</h3>
                                    <p>Nos apasiona aprender y mejorar. Aplicamos las mejores prácticas del sector para garantizar soluciones modernas, seguras y escalables que realmente aporten valor a tu empresa.</p>
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
export default Nosotros;