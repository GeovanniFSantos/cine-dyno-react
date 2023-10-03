import Banner from 'Components/Banner';
import Card from 'Components/Card';
import Titulo from 'Components/Titulo';
import styles from './Favoritos.module.css';
import { useFavoritoContext } from 'Context/Favoritos';

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;