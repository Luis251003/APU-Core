import { Footer, Nav, Whatsapp } from '../../components';
import styles from './CasosEstudio.module.css'

import images01 from '../../assets/images/CasosEstudio/image-3.png';
import images02 from '../../assets/images/CasosEstudio/image-2.png';
import images03 from '../../assets/images/CasosEstudio/image-1.png';
import images04 from '../../assets/images/CasosEstudio/image.png';

const CasosEstudio = ()=>{
    return (
        <>
            <Whatsapp/>
            <Nav/>
            <div className={styles.header}>
                <div className="container">
                    <h1 id='title' className={`title ${styles.title}`}>Casos de Estudio y Metodologías</h1>
                    <p className={styles.text}>Creamos plataformas web adaptadas a las necesidades específicas de tu negocio, asegurando una experiencia de usuario fluida y optimizada. Nuestras soluciones son modulares, escalables y pensadas para crecer contigo, ofreciendo todo lo necesario para que tu presencia en línea sea un verdadero motor de éxito.</p>
                    <p className={styles.subtitle}>Integra el Producto digital</p>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <p>UX/UI</p>
                        </div>
                        <div className={styles.card}>
                            <p>DEV</p>
                        </div>
                    </div>
                </div>
            </div>
            <main>
                <section className={`section ${styles.section__metodologias}`}>
                    <div className="container">
                        <p>GENERA BENEFICIOS DENTRO DEL MUNDO DIGIAL</p>
                        <h2 id='title' className={styles.title}>Efectividad de Nuestras Metodologías</h2>
                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={images01} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3 className={styles.card__title}>Scrum</h3>
                                    <p className={styles.card__text}>Gestión de proyectos de manera ágil y flexible, con sprints de trabajo que permiten entregas rápidas, adaptaciones constantes y una comunicación continua con el cliente. Esto asegura que el producto final cumpla sus expectativas.</p>
                                    <ul>
                                        <li>Gestión de proyectos ágiles</li>
                                        <li>Equipos de trabajo colaborativos</li>
                                        <li>Liderazgo y coordinación</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={images02} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3 className={styles.card__title}>Metodología Lean</h3>
                                    <p className={styles.card__text}> Implementamos Lean para identificar el valor real de cada función y eliminar el desperdicio, enfocándonos en lo que realmente aporta a tu negocio. Esto nos permite entregar soluciones eficientes sin comprometer la calidad.</p>
                                    <ul>
                                        <li>Optimización de procesos</li>
                                        <li>Desarrollo de productos</li>
                                        <li>Estrategia de negocio</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={images03} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3 className={styles.card__title}>Desarrollo Iterativo</h3>
                                    <p className={styles.card__text}>Nuestra metodología de trabajo permite mejoras constantes y ajustes en cada etapa del desarrollo. Con entregas incrementales y evaluaciones regulares, aseguramos que el proyecto avance de manera efectiva y cumpla con tus expectativas.</p>
                                    <ul>
                                        <li>Proyectos complejos y a largo plazo</li>
                                        <li>Mejora continua del producto</li>
                                        <li>Aseguramiento de calidad</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.card__img}>
                                    <img src={images04} alt="" />
                                </div>
                                <div className={styles.card__info}>
                                    <h3 className={styles.card__title}>Gestión Visual del Proyecto</h3>
                                    <p className={styles.card__text}>Utilizamos herramientas como Kanban y Jira para gestionar las tareas y visualizar el progreso de cada proyecto en tiempo real. Esto facilita el seguimiento de plazos y mantiene al equipo alineado y enfocado.</p>
                                    <ul>
                                        <li>Gestión de tareas y flujo de trabajo</li>
                                        <li>Monitoreo del progreso</li>
                                        <li>Comunicación en equipo</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );    
}
export default CasosEstudio