import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-A.png';
import LogoSubtitle from '../../assets/images/logo-text.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Anish" />
            </Link>
            <nav>
                <NavLink exact="true" to="/" activeclassname="active">
                    <FontAwesomeIcon icon={faHome} color ="#4d4d46"/>
                </NavLink>
                <NavLink exact="true" to="/about" activeclassname="active" className="about-link">
                    <FontAwesomeIcon icon={faUser} color ="#4d4d46"/>
                </NavLink>
                <NavLink exact="true" to="/contact" activeclassname="active" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color ="#4d4d46"/>
                </NavLink>  
            </nav>
            <div className="social-links">
            <ul>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/anish-chikhaliya-62b612218/'>
                        <FontAwesomeIcon icon={faLinkedin} color ="#ffd700"/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://github.com/AnishChikhaliya'>
                        <FontAwesomeIcon icon={faGithub} color ="#ffd700"/>
                    </a>
                </li>
            </ul>
            </div>
        </div>
    );
}
export default Sidebar;