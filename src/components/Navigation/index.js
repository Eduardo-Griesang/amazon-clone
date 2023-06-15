import './Navigation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul className='navigation-ul'>
                
                <img src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png' alt='Amazom Prime Video Logo' />
    
                <li>
                    <span className='active navigation-item'>Home</span>
                    <ul className='navigation-item-Dropdown'>
                        <li>All</li>
                        <li>Movies</li>
                        <li>TV shows</li>
                        <li>Sports</li>
                    </ul>
                </li>
                <li>
                    <span className='navigation-item'>Store</span>
                    <ul className='navigation-item-Dropdown'>
                        <li>All</li>
                        <li>Rent</li>
                        <li>Channels</li>
                    </ul>
                </li>
                <li>
                    <span className='navigation-item'>Categories</span>
                </li>
                <li>
                    <span className='navigation-item'>My stuff</span>
                    <ul className='navigation-item-Dropdown'>
                        <li>All</li>
                        <li>Watchlist</li>
                        <li>Rentals</li>
                    </ul>
                </li>
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