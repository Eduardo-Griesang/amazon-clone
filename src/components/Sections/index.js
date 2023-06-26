import "./Sections.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Sections = ({ API, genreFilter }) => {

    const secMoviesRef = useRef()

    const gap = 16;
    
    function scroll (e) {
        const carousel = e.target.parentNode.parentNode
        const content = e.target.parentNode.parentNodes
        const next = e.target.parentNode.childNodes[0]
        const prev = e.target.parentNode.childNodes[1]

        console.log(carousel.offsetLeft)
        let width = carousel.offsetWidth;
        window.addEventListener("resize", () => (width = carousel.offsetWidth));

        if (e.target.id === 'next') {
            const firstMovie = secMoviesRef.current.firstChild.offsetLeft
            console.log(firstMovie)
        } else{
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        }
    }

    /* faz o filtro da API com o genero de filmes da seção */
    const i = API.filter(movie => movie.genres[0] === genreFilter)
    /* pega toda a lista de filmes e seleciona apenas os 15 primeiros, para ele não mostrar a lista completa */
    const filtered = i.slice(1, 15);
    
    return(
        <section className="sec">
            <div className="sec-title">

                <section>
                    <h2>Prime</h2> 
                    <span>{genreFilter} movies</span> 
                </section>

                <div className="sec-movies" ref={secMoviesRef}>
                    {filtered.map(movie => {
                        return(
                            <div className="item">
                                <img src={movie.thumbnail} alt={movie.title}/>
                            </div>
                        )
                    })}
                </div>
                <section>
                    <FontAwesomeIcon className="next-btn btn" onClick={scroll} id="next" icon={faChevronRight} style={{color: "#ffffff",}} />
                    <FontAwesomeIcon className="prev-btn btn" onClick={scroll} id="prev" icon={faChevronLeft} style={{color: "#ffffff",}} />
                </section>
            </div>
        </section>
    )
}

export default Sections