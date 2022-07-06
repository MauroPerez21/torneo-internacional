
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import './Icons.styles.css'
const Networks = ()=>{
    return(
        <div className="iconsContainer">  
            <div className="iconsContainer-dflex">
                <a className="aref" href="https://www.facebook.com/mauricio.b.perez.982/"><BsFacebook className="network-facebook"/></a>
                <a className="aref" href="https://www.linkedin.com/in/mauricio-b-p%C3%A9rez-6a1ba9181/"><BsInstagram className="network"/></a>
                <a className="aref" href="https://github.com/MauroPerez21"><BsYoutube className="network-wine"/></a>
            </div>  
        </div>);
          }  
export default Networks;