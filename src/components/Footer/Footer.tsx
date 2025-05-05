import styles from './Footer.module.css'

import logo from '../../assets/images/Footer/Logo__footer.png'

import ico__x from '../../assets/icons/X.png'
import ico__ig from '../../assets/icons/instagram.png'
import ico__tk from '../../assets/icons/tiktok.png'
import ico__lk from '../../assets/icons/linkledin.png'
import { Link } from 'react-router-dom'

const Footer = () =>{
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__content}>
                    <div className={styles.footer__redes}>
                        <div className={styles.logo}>
                            <img src={logo} alt="" />
                        </div>
                        <ul className={styles.enlaces}>
                            <li><Link to="" target='_blank'><img src={ico__x} alt="" /></Link></li>
                            <li><Link to="https://www.instagram.com/apucore.peru/" target='_blank'><img src={ico__ig} alt="" /></Link></li>
                            <li><Link to="https://www.tiktok.com/@apucore.peru" target='_blank'><img src={ico__tk} alt="" /></Link></li>
                            <li><Link to="https://www.linkedin.com/company/107208254/admin/dashboard/" target='_blank'><img src={ico__lk} alt="" /></Link></li>
                        </ul>
                    </div>
                    <div className={styles.footer__links}>
                        <div className={styles.link__content}>
                            <p className={styles.footer__title}>Compañia</p>
                            <ul>
                                <li><Link to="/Nosotros">Nosotros</Link></li>
                                <li><Link to="/CasosEstudio">Casos de Estudio</Link></li>
                                <li><Link to="/Contacto">Contacto</Link></li>
                            </ul>
                        </div>
                        <div className={styles.link__content}>
                            <p className={styles.footer__title}>Servicios</p>
                            <ul>
                                <li><Link to="/Web">Plataforma Web</Link></li>
                                <li><Link to="/Mobile">Plataforma Movil</Link></li>
                                <li><Link to="/">Beneficios</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer__terms}>
                        <p className={styles.footer__title}>Terminos y Condiciones</p>
                        <ul>
                            <li>Website propiedad de APU Core, no puede ser replicado.</li>
                            <li>No somos responsables por el contenido de los sitios web externos a los que se enlaza desde este portafolio.</li>
                            <li>Podemos modificar estos Términos y Condiciones en cualquier momento, revisa esta página periódicamente.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.footer__small}>
                <div className="container">
                    <p>Copyright © 2025   Desarrollador por  APU Core, todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;