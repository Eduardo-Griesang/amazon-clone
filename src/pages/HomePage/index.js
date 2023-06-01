import './HomePage.css'

import Navigation from '../../components/Navigation'
import Carousel from '../../components/Carousel'
import Sections from '../../components/Sections'

const HomePage = () => {

    async function MoviesAPI() {
        const allMovies = await fetch(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json`)
        const allMoviesJSON = await allMovies.json()

        const i = allMoviesJSON.filter(movie => movie.genres[0] === "Action")
        console.log(i)
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
                <Sections />
            </main>
        </section>
    )
}

export default HomePage