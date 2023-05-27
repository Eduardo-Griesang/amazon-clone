import './Navigation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <nav className='navigation'>
            <ul className='navigation-ul'>
                
                <img src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png' alt='Amazom Prime Video Logo' />
    
                <li>
                    <span className='active'>Home</span>
                </li>
                <li>
                    <span>Store</span>
                </li>
                <li>
                    <span>Categories</span>
                </li>
                <li>
                    <span>My stuff</span>
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