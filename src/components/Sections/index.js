import "./Sections.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Sections = ({ API }) => {

    const gap = 16;

    const carousel = document.querySelector(".sec-title")
    const content = document.querySelector(".sec-movies")
    
    function next (e) {
        const next = e.target.id
        carousel.scrollBy(width + gap, 0);
        if (carousel.scrollWidth !== 0) {
            prev.style.display = "flex";
         }
        if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            next.style.display = "none";
        }
    }

    function prev () {
        carousel.scrollBy(-(width + gap), 0);
        if (carousel.scrollLeft - width - gap <= 0) {
            prev.style.display = "none";
        }
        if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
            next.style.display = "flex";
        }
    }

    let width = carousel.offsetWidth;
    window.addEventListener("resize", () => (width = carousel.offsetWidth));

    /* pega toda a lista de filmes e seleciona apenas os 10 primeiros, para ele não mostrar a lista completa */
    const filtered = API.slice(1, 10);
    
    return(
        <section className="sec">
            <div className="sec-title">

                <section>
                    <h2 class="ola">Prime</h2> 
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

                <FontAwesomeIcon className="next-btn btn" onClick={next} id="next" icon={faChevronRight} style={{color: "#ffffff",}} />
                <FontAwesomeIcon className="prev-btn btn" onClick={prev} id="prev" icon={faChevronLeft} style={{color: "#ffffff",}} />
            </div>
        </section>
    )
}

export default Sections