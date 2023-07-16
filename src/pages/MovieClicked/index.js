import './MovieClicked.css'

const MovieClicked = ({movie}) => {

    const movieProp = movie.state

    console.log(movie)
    return (
        <div>
            <h1>{movieProp.title}</h1>
        </div>
    )
}

export default MovieClicked