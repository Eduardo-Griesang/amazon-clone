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

        const i = allMoviesJSON.filter(movie => movie.genres[0] === "Action")
         
        setAPI(i)
        return i
    }
    
    MoviesAPI()

    return(
        <section className='html'>
            <header>
                <Navigation />
                <Carousel />
            </header>

            <main>
                {API.slice(0, 1).map(movie => {
                    return(
                        <Sections name={movie.title} img={movie.thumbnail} />
                    )
                })}
            </main>
        </section>
    )
}

export default HomePage