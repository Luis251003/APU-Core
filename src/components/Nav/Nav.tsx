import styles from './Nav.module.css'

import logo from '../../assets/images/Home/image 362.png'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { useState } from 'react'

const Nav = ()=>{

    const[isActive, setIsActive] = useState(false);

    const handleMenu = ()=>{
        setIsActive(!isActive)
    }
    
    return(
        <>
        <Menu isActive={isActive} handleMenu={handleMenu}/>
        <nav className={styles.nav}>
            <div className={`container ${styles.nav__container}`}>
                <div className={styles.nav__logo}>
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <ul className={styles.nav__links}>
                    <li className={styles.link__dropdown}>
                        <a className={styles.link} href="#">Soluciones </a>
                        <ul className={styles.sublinks}>
                            <li><Link to="/Web">Web Designe</Link></li>
                            <li><Link to="/Mobile">Movil Designe</Link></li>
                        </ul>
                    </li>
                    <li><Link className={styles.link} to="/Nosotros">Nosotros</Link></li>
                    <li><Link className={styles.link} to="/CasosEstudio">Casos de estudio</Link></li>
                    <li><Link className={styles.link} to="/Contacto">Contacto</Link></li>
                </ul>
                <div className={styles.nav__language}>
                    <p>Idiomas</p>
                    <i className="fa-solid fa-earth-americas"></i>
                    <ul className={styles.language__container}>
                        <li><button type='button'>Spanish</button></li>
                        <li><button type='button'>English</button></li>
                    </ul>
                </div>
                <div className={styles.nav__menu}>
                    <button onClick={handleMenu} className={styles.btn__menu}><i className="fa-solid fa-bars"></i></button>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Nav; 
