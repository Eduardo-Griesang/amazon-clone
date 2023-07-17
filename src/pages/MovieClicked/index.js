import { useLocation } from 'react-router-dom'
import PlayPrime from '../../components/PlayPrime'

import './MovieClicked.css'

const MovieClicked = () => {

    let { state } = useLocation()

    let movie = state.movie[0]
    return (
        <div className='movie-page-wrapper'>
            <div className='movie-flex'>
                <div className='movie-page'>
                    <h1>{movie.title}</h1>
                    <p>{movie.extract}</p>

                    <div className='movie-page-genre'>
                        {movie.genres.map((genre) => {
                            return(
                                <h3>{genre}</h3>
                            )
                        })}
                    </div>
                </div>
                <img className='movie-img' src={movie.thumbnail} alt={movie.title} />
            </div>
            <div className='movie-watch'>
                <PlayPrime />
            </div>
        </div>
    )
}

export default MovieClicked