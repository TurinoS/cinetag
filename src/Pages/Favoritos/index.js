import styles from './Favoritos.module.css';
import Banner from '../../components/Banner';
import Titulo from '../../components/Titulo';
import Card from '../../components/Card';
import { useFavoritoContext } from '../../contextos/Favoritos';

export default function Favoritos() {
    const { favorito } = useFavoritoContext();

    return(
        <>
            <Banner pagina="favoritos" />
            <Titulo><h1>Meus Favoritos</h1></Titulo>
            <section className={styles.container}>
                {favorito.map((fav) =>  {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}