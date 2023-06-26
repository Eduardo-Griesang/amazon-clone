import './HomePage.css'

import Navigation from '../../components/Navigation'
import Carousel from '../../components/Carousel'
import Sections from '../../components/Sections'
import { useState } from 'react'

const HomePage = () => {

    const [ API, setAPI] = useState([])

    async function MoviesAPI() {
        const allMovies = await fetch(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json`)
        const allMoviesJSON = await allMovies.json()
         
        setAPI(allMoviesJSON)
        return allMoviesJSON
    }
    
    MoviesAPI()

    return(
        <section className='html'>
            <header>
                <Navigation />
                <Carousel />
            </header>

            <main>
                <Sections API={API} genreFilter={"Action"} />
                <Sections API={API} genreFilter={"Horror"} />
                <Sections API={API} genreFilter={"Comedy"} />
                <Sections API={API} genreFilter={"Superhero"} />
            </main>
        </section>
    )
}

export default HomePage