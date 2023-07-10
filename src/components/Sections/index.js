import "./Sections.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import PlayPrime from "../PlayPrime";

const Sections = ({ API, genreFilter }) => {

    const secMoviesRef = useRef()
    const movieHover = useRef()
    const MOVIE = useRef()

    function scrollRight (e) {
        /* pega o pai dos elementos a serem escrolados, e adiciona o "offsetWidth"(tamanho da tela visivel) a posição do scroll,
        lembrando que o elemento precisa ter "overflow-x= auto" no css para funcionar */
        secMoviesRef.current.scrollLeft += secMoviesRef.current.offsetWidth
    }

    function scrollLeft (e) {
        /* pega o pai dos elementos a serem escrolados, e reduz o "offsetWidth"(tamanho da tela visivel) a posição do scroll,
        lembrando que o elemento precisa ter "overflow-x= auto" no css para funcionar */
        secMoviesRef.current.scrollLeft -= secMoviesRef.current.offsetWidth
    }

    /* faz o filtro da API com o genero de filmes da seção */
    const i = API.filter(movie => movie.genres[0] === genreFilter)
    /* pega toda a lista de filmes e seleciona apenas os 15 primeiros, para ele não mostrar a lista completa */
    const filtered = i.slice(1, 15);

    /* pega o resumo do filme (movie.extract), e usa o método 'substring' que pega os caracteres de uma string dentro de determinado range,
    e adiciona (...) */
    function aboutTheMovie (movie) {
        const movieResume = movie.extract.substring(0, 110);
        return movieResume + "..."
    }

    function whereToHover () {
        const where = MOVIE.current.getBoundingClientRect()
        const whereInt = parseInt(where.right)
        movieHover.current.right = `-${whereInt}px`
    }
    
    return(
        <section className="sec">
            <div className="sec-title">

                <section>
                    <h2>Prime</h2> 
                    <span>{genreFilter} movies</span> 
                </section>

                <div className="sec-movies" ref={secMoviesRef} onMouseEnter={whereToHover}>
                    {filtered.map(movie => {
                        return(
                            <div className="movie-wrapper" ref={MOVIE}>
                                <div className="item">
                                    <img className="item-img" src={movie.thumbnail} alt={movie.title}/>
                                </div>

                                <div className="information-onHover" ref={movieHover}>
                                    <PlayPrime small={true}/> 
                                    <h3>{movie.title}</h3>
                                    <h6>{aboutTheMovie(movie)}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <section>
                    <FontAwesomeIcon className="next-btn btn" onClick={scrollRight} icon={faChevronRight} style={{color: "#ffffff",}} />
                    <FontAwesomeIcon className="prev-btn btn" onClick={scrollLeft} icon={faChevronLeft} style={{color: "#ffffff",}} />
                </section>
            </div>
        </section>
    )
}

export default Sections