import './NavigationItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const NavigationItem = ( { active, title, dropdown } ) => {

    function ac () {
        if (active){
            const show = 'active'
            return show
        }
    }
    return (
        <li>
            <div className={`navigation-item-wrapper ${ac()}`}>
                <span className='navigation-item'>{title}</span>
                <FontAwesomeIcon icon={faChevronDown} className='icon-down' />
            </div>
            <ul className='navigation-item-Dropdown'>
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