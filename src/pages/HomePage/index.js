import './HomePage.css'

import Carousel from '../../components/Carousel'
import Sections from '../../components/Sections'

import { useState, useEffect } from 'react'

const HomePage = () => {

    const [ API, setAPI] = useState([])

    /* nesse contexto é melhor usar o fetch normal com .then, porque usando async function o react fica fazendo requests infinitos e deixando a 
    aplicação extremamente lenta */
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json`, {
            method : 'GET',
        }).then((resp) => resp.json())
            .then((movies) => setAPI(movies))

    }, [])

    return(
        <section className='html'>
            <header>
                <Carousel />
            </header>

            <main>
                <Sections API={API} genreFilter={"Action"} />
                <Sections API={API} genreFilter={"Horror"} />
                <Sections API={API} genreFilter={"Comedy"} />
                <Sections API={API} genreFilter={"Superhero"} />
                <Sections API={API} genreFilter={"Drama"} />
            </main>
        </section>
    )
}

export default HomePage