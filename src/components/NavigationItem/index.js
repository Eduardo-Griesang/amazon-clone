import './NavigationItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NavigationItem = ( { active, title, dropdown, big, secTitle } ) => {

    function ac () {
        if (active){
            const showActive = 'active'
            return showActive
        }
    }

    function bigger () {
        if(big) {
            const showBig = 'bigger' 
            return showBig
        }
    }

    return (
        <li>
            <div className={`navigation-item-wrapper ${ac()}`}>
                <span className='navigation-item'>{title}</span>
                <FontAwesomeIcon icon={faChevronDown} className='icon-down' />
            </div>
            <ul className={`navigation-item-Dropdown ${bigger()}`}>
                {dropdown.map(i => {
                    return(
                        <li>{i}</li>
                    ) 
                })}
            </ul>
        </li>
    )
}

export default NavigationItem