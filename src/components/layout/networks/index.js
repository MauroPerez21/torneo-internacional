
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import './Icons.styles.css'
const Networks = ()=>{
    return(
        <div className="iconsContainer">  
            <div className="iconsContainer-dflex">
                <a className="aref" href="https://www.facebook.com/insculturameta"><BsFacebook className="network-facebook"/></a>
                <a className="aref" href="#"><BsInstagram className="network"/></a>
                <a className="aref" href="https://www.youtube.com/watch?v=IqP-4IAhGTw&t=1s"><BsYoutube className="network-wine"/></a>
            </div>  
        </div>);
          }  
export default Networks;