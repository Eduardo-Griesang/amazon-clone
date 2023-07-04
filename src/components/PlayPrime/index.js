import './PlayPrime.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCirclePlay, faCirclePlus, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const PlayPrime = () => {
    return(
        <>
            <div className='included-with-prime'>
                <FontAwesomeIcon icon={faCircleCheck} style={{"--fa-primary-color": "#000000", "--fa-primary-opacity": "0.9", "--fa-secondary-color": "#1a98ff", "--fa-secondary-opacity": "1",}} />
                            <span>Included with Prime</span>
            </div>

            <div className='Play-prime'>
                <FontAwesomeIcon icon={faCirclePlay} size="2xl" style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#ffffff", "--fa-secondary-opacity": "0",}} className='Play-prime-icon-play' />
                <h1>Play</h1>

                <FontAwesomeIcon icon={faCirclePlus} style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#4f4f4f", "--fa-secondary-opacity": "1",}} className='Play-prime-icon' />
                <FontAwesomeIcon icon={faCircleInfo} style={{color: "#ffffff",}} className='Play-prime-icon' />
            </div>
        </>
    )
}

export default PlayPrime