import './index.scss';
import {Link, NavLink} from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link classNmae='logo' to='/'>
                <img src={LogoS} alt="logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="Anish" />
            </Link>
            <nav>
                <NavLink exact="true" to="/" activeClassName="active">
                    <FontAwesomeIcon icon={faHome} color ="#4d4d46"/>
                </NavLink>
                <NavLink exact="true" to="/about" activeClassName="active" className="about-link">
                    <FontAwesomeIcon icon={faUser} color ="#4d4d46"/>
                </NavLink>
                <NavLink exact="true" to="/contact" activeClassName="active" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope} color ="#4d4d46"/>
                </NavLink>  
            </nav>
         
        </div>
    );
}
export default Sidebar;