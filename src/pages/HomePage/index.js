import './HomePage.css'

import Navigation from '../../components/Navigation'
import Carousel from '../../components/Carousel'
import Sections from '../../components/Sections'

const HomePage = () => {

    let name = ''
    let img = ''

    async function MoviesAPI() {
        const allMovies = await fetch(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json`)
        const allMoviesJSON = await allMovies.json()

        const i = allMoviesJSON.filter(movie => movie.genres[0] === "Action")
        
        name = i[0].title;
        img = i[0].thumbnail;

        console.log(name, img)
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
                <Sections name={name} img={img} />
            </main>
        </section>
    )
}

export default HomePage