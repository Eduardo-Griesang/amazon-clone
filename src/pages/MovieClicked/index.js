import './MovieClicked.css'

const MovieClicked = ({element}) => {

    const elementProp = element.state[0]

    console.log(element)
    return (
        <div>
            <h1>{elementProp.title}</h1>
        </div>
    )
}

export default MovieClicked