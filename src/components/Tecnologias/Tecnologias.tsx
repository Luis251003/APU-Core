import styles from './Tecnologias.module.css'

import html from "../../assets/images/Home/image 351.png"
import css from "../../assets/images/Home/image 352.png"
import js from "../../assets/images/Home/image 353.png"
import flutter from "../../assets/images/Home/image 354.png"
import github from "../../assets/images/Home/image 355.png"
import java from "../../assets/images/Home/image 356.png"
import python from "../../assets/images/Home/image 357.png"

const Tecnologias = ()=>{
    return (
        <div className={styles.tecnologias}>
            <p>Técnologías que hacen todo posible</p>
            <ul>
                <li><img src={html} alt="" /></li>
                <li><img src={css} alt="" /></li>
                <li><img src={js} alt="" /></li>
                <li><img src={flutter} alt="" /></li>
                <li><img src={github} alt="" /></li>
                <li><img src={java} alt="" /></li>
                <li><img src={python} alt="" /></li>
            </ul>
        </div>
    );
}
export default Tecnologias;