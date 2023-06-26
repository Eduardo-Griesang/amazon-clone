import './Navigation.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from '../NavigationItem'
import { useRef, useState } from 'react'

const Navigation = () => {

    const ref = useRef()
    const wrapper = useRef()

    const [ display, setDisplay ] = useState('none')

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
    const account = [
        "Help",
        "Watch Anywhere",
        "Account & Settings",
        "Prime Benefits",
        "Log out",

        "Kids",
        "Add new",
        "Manage profiles",
        "Learn more"
    ]

    function toggleSearch() {
        const nav = ref.current
        const wrap = wrapper.current

        console.log(nav.innerWidth)

        /* se o display for 'none' ele transforma o useState() em 'flex' mostrando o elemento na tela  */
        if(display === 'none'){
            setDisplay('flex')
            wrap.style.display = (display)
            wrap.style.width = (nav.innerWidth)
        } 
        /* se o display for 'flex' ele transforma o useState() em 'none' escondendo o elemento */
        else{
            setDisplay('none')
            wrap.style.display = (display)
        }
    }

    return (
        <nav className='navigation' ref={ref}>

            <ul className='navigation-ul'>
                <img src='https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png' alt='Amazom Prime Video Logo' />

                <NavigationItem active={true} title={"Home"} dropdown={home} />

                <NavigationItem title={"Store"} dropdown={store} />

                <NavigationItem title={"Categories"} dropdown={categories} big={true} secTitle={"Genres"} />

                <NavigationItem title={"My stuff"} dropdown={myStuff} />
            </ul>

            <section className='navigation-user' onClick={toggleSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#aaa",}} className='navigation-user-search' />

                <div className='navigation-user-search-wrapper' ref={wrapper}>
                    <form className='navigation-user-search-bar'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#aaa",}} className='navigation-user-inside-search' />
                        <input type='search' placeholder='Search' />
                    </form>
                </div>

                <section>
                    <span>User</span>
                    <img src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png' alt='User logo' />
                </section>
                
                <NavigationItem title={"Your account"} dropdown={account} />
            </section>
        </nav>
    )
}

export default Navigation