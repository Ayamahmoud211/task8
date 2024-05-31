import { faBars, faDisplay, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Navbar , Nav } from "react-bootstrap";
import './style.css'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
export default function NAVBAR() {
    return (
    <>
     <div className="nav ">  
      <ul className="nav-ul">
        <li><img src="/logo.svg" alt="" /></li>
        <li className="li">Digital markiting agency</li>
      </ul>
          
      <ul className="nav-ul1">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">clients & Partner</a></li>
        <li><a href="#">X Academy</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Let's Talk</a></li>
      </ul>
      <FontAwesomeIcon icon={faBars} className='hum-icon' />
        
    </div>   
    </>
    );
}