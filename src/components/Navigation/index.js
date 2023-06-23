import './Navigation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from '../NavigationItem'

const Navigation = () => {

    const home = [
        "All",
        "Movies",
        "TV shows",
        "Sports"
    ]
    const store = [
        "All",
        "Rent",
        "Channels"
    ]
    const myStuff = [
        "All",
        "Watchlist",
        "Rentals"
    ]
    const categories = [
        "Action and Adventure",
        "Anime",
        "Comedy",
        "Documentary",
        "Drama",
        "Fantasy",
        "Horror",
        "International",
        "Kids",
        "Music videos and concerts",
        "Mystery and thrillers",
        "Romance"
    ]

    return (
        <nav className='navigation'>
            <ul className='navigation-ul'>
                
                <img src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png' alt='Amazom Prime Video Logo' />

                <NavigationItem active={true} title={"Home"} dropdown={home} />

                <NavigationItem title={"Store"} dropdown={store} />

                <NavigationItem title={"Categories"} dropdown={categories} big={true} secTitle={"Genres"} />

                <li>
                    <div className='navigation-item-wrapper'>
                        <span className='navigation-item'>Categories</span>
                        <FontAwesomeIcon icon={faChevronDown} className='icon-down' />
                    </div>
                    <ul className='navigation-item-Dropdown bigger'>
                        <h4>Genres</h4>
                        <ul>
                            <li></li>
                            <li>Anime</li>
                            <li>Comedy</li>
                            <li>Documentary</li>
                            <li>Drama</li>
                            <li>Fantasy</li>
                            <li>Horror</li>
                            <li>International</li>
                            <li>Kids</li>
                            <li></li>
                            <li></li>
                            <li>Romance</li>
                        </ul>
                    </ul>
                </li>

                <NavigationItem title={"My stuff"} dropdown={myStuff} />
                
            </ul>
            <section className='navigation-user'>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#aaa",}} className='navigation-user-search' />
                <section>
                    <span>User</span>
                    <img src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png' alt='User logo' />
                </section>
            </section>
        </nav>
    )
}

export default Navigation