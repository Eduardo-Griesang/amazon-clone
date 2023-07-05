import './PlayPrime.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCirclePlay, faCirclePlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const PlayPrime = ({small}) => {

    function isSmall() {
        if (small){
            return 'small'
        }
    }

    return(
        <>
            <div className={`included-with-prime ${isSmall()}`}>
                <FontAwesomeIcon className='icon-badge' icon={faCircleCheck} style={{color: "#1a98ff",}} />
                <span>Included with Prime</span>
            </div>

            <div className={`Play-prime ${isSmall()}`}>
                <div className='play'>
                    <FontAwesomeIcon icon={faCirclePlay} size="2xl" style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff", "--fa-secondary-opacity": "0",}} className='Play-prime-icon-play' />
                    <h1>Play</h1>
                </div>

                <div className='more'>
                    <FontAwesomeIcon icon={faCirclePlus} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#4f4f4f", "--fa-secondary-opacity": "1",}} className='Play-prime-icon' />
                    <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}} className='Play-prime-icon' />
                </div>
            </div>
        </>
    )
}

export default PlayPrime