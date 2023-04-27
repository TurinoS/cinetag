import styles from './Rodape.module.css';

export default function Rodape() {
    return(
        <footer className={styles.rodape}>
            <h2>Desenvolvido por <span className={styles.alura}>Alura</span>.</h2>
        </footer>
    )
}