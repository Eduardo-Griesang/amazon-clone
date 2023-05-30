import './Carousel.css'

const Carousel = () => {
    return(
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class='d-block w-100 movie-banner' src="https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_LATCANZ_Air_Launch_Concept_CS/69fec07f-e6ad-4de4-9955-a445c62f50fc._UR3840,1440_SX2160_FMwebp_.jpeg" alt="..."/>
                    <div class="carousel-caption d-none d-md-block movie-info">
                        <img className='amazom-original' src='https://m.media-amazon.com/images/S/pv-target-images/7e5ebe135ef7e9f912cf8c29b6c9f4e22cab8ff78c0584a45c129cc1df33336e._AC_SX500_FMwebp_.png' alt='...' />
                        <img className='movie-title' src='https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_LATCANZ_Air_Launch_Concept_CS/b247eb5a-f4a9-4deb-858b-fd5c5e92ce5d._AC_SX500_FMwebp_.png' alt='...' />
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel