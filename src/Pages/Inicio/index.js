import styles from './Inicio.module.css';
import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { useEffect, useState } from 'react';

export default function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/TurinoS/cinetag-api/videos")
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return(
        <>
            <Banner pagina="home" />
            <Titulo><h1>Um lugar para guardar seus vídeos e filmes!</h1></Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}></Card>
                })}
            </section>
        </>
    )
}