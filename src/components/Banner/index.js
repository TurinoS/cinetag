import styles from './Banner.module.css';

export default function Banner({ pagina }) {
    return (
        <div 
            className={styles.capa} 
            style={{ backgroundImage: `url('/imagens/banner-${pagina}.png')` }}
        ></div>
    )
}