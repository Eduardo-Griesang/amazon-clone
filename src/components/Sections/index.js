import "./Sections.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Sections = ({ API }) => {

    const gap = 16;

    const carousel = document.querySelector(".sec-title")
    const content = document.querySelector(".sec-movies")

    function scroll (e) {
        const next = e.target.parentNode.childNodes[0]
        const prev = e.target.parentNode.childNodes[1]

        if (e.target.id === 'next') {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
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

    let width = '100vw';
    window.addEventListener("resize", () => (width = carousel.offsetWidth));

    /* pega toda a lista de filmes e seleciona apenas os 10 primeiros, para ele não mostrar a lista completa */
    const filtered = API.slice(1, 10);
    
    return(
        <section className="sec">
            <div className="sec-title">

                <section>
                    <h2>Prime</h2> 
                    <span>Action Movies</span> 
                </section>

                <section className="sec-movies">
                    {filtered.map(movie => {
                        return(
                            <div className="item">
                                <img src={movie.thumbnail} alt={movie.title}/>
                            </div>
                        )
                    })}
                </section>
                <section>
                    <FontAwesomeIcon className="next-btn btn" onClick={scroll} id="next" icon={faChevronRight} style={{color: "#ffffff",}} />
                    <FontAwesomeIcon className="prev-btn btn" onClick={scroll} id="prev" icon={faChevronLeft} style={{color: "#ffffff",}} />
                </section>
            </div>
        </section>
    )
}

export default Sections