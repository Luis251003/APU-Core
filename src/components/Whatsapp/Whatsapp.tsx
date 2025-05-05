import styles from './Whatsapp.module.css'

const Whatsapp = ()=>{
    return(
        <a href="https://wa.me/51972226417?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n" target='_blank' className={styles.btn__wsp}>
            <i className="fa-brands fa-whatsapp"></i>
        </a>
    );
}
export default Whatsapp;