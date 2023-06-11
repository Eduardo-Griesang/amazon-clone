import "./Sections.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Sections = ({ API }) => {

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

                <FontAwesomeIcon className="next-btn btn" icon={faChevronRight} style={{color: "#ffffff",}} />
                <FontAwesomeIcon className="prev-btn btn" icon={faChevronLeft} style={{color: "#ffffff",}} />
            </div>
        </section>
    )
}

export default Sections