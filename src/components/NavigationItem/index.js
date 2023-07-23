import './NavigationItem.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const NavigationItem = ( { title, dropdown, big, secTitle, whereToLink } ) => {

    function bigger () {
        if(big) {
            const showBig = 'bigger' 
            return showBig
        }
    }

    return (
        <li>
            <div className={`navigation-item-wrapper`}>
                <NavLink className={({Active, NotActive})=>
                        NotActive ? "navigation-item" : Active ? "navigation-item active" : "navigation-item" 
                    } to={whereToLink}>

                    <span>{title}</span>
                    <FontAwesomeIcon icon={faChevronDown} className='icon-down' />
                    
                </NavLink>
            </div>
            <ul className={`navigation-item-Dropdown ${bigger()}`}>
                {bigger() ?
                    <>
                        <h4>{secTitle}</h4>
                        <ul>
                            {dropdown.map(i => {
                                return(
                                    <li>{i}</li>
                                ) 
                            })}
                        </ul>
                    </> 
                : <>
                    {dropdown.map(i => {
                        return(
                            <li>{i}</li>
                        ) 
                    })}
                  </> 
                
                }
                
            </ul>
        </li>
    )
}

export default NavigationItem