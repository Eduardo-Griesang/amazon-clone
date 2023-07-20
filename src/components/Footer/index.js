import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className='footer'>
            <h1>This clone was developed by Eduardo Griesang</h1>

            <div>
                <a href='https://www.linkedin.com/in/eduardo-griesang-0b779921b/'><FontAwesomeIcon icon={faLinkedin} style={{color: "#aaa",}} /></a>
                <a href='https://github.com/Eduardo-Griesang'><FontAwesomeIcon icon={faGithub} style={{color: "#aaa",}} /></a>
                <a href='https://www.instagram.com/eduardo_griesang/'><FontAwesomeIcon icon={faInstagram} style={{color: "#aaa",}} /></a>
            </div>
        </footer>
    )
}

export default Footer