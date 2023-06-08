import "./Sections.css"

const Sections = ({ API }) => {

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
                            <div className="item animation">
                                <img src={movie.thumbnail} alt={movie.title}/>
                            </div>
                        )
                    })}
                </section>
                
            </div>
            </section>
    )
}

export default Sections