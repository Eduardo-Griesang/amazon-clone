import './HomePage.css'

import Navigation from '../../components/Navigation'
import Carousel from '../../components/Carousel'
import Sections from '../../components/Sections'

const HomePage = () => {
    return(
        <html>
            <header>
                <Navigation />
                <Carousel />
            </header>

            <main>
                <Sections />
            </main>
        </html>
    )
}

export default HomePage