import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

type props={
    isActive:boolean,
    handleMenu: ()=> void
}

const Menu = ({isActive,handleMenu}:props) =>{

    return (
        <div className={`${styles.menu__container} ${isActive ? `${styles.active}`:''}`}>
           <div className={styles.menu}>
                <div className={styles.menu__header}>
                    <div className={styles.menu__header__content}>
                        <div className={styles.menu__logo}>
                            <p>APU <span>Core</span></p>
                        </div>
                        <div className={styles.menu__exit}>
                            <button type='button' onClick={handleMenu} className={styles.btn__exit}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul className={styles.menu__links}>
                    <li><Link className={styles.link} to="/Web">Web Designe</Link></li>
                    <li><Link className={styles.link} to="/Mobile">Movil Designe</Link></li>
                    <li><Link className={styles.link} to="/Nosotros">Nosotros</Link></li>
                    <li><Link className={styles.link} to="/CasosEstudio">Casos de estudio</Link></li>
                </ul>
                <div className={styles.menu__buttons}>
                    <Link className={styles.btn__contactar} to={'/Contacto'} type="button">Contactar</Link>
                </div>
           </div>
        </div>
    )
}
export default Menu