import './Modal.styles.css'
//IMPORT REACT-ICONS
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephoneOutbound }  from "react-icons/bs";
import { FiAlertTriangle} from "react-icons/fi";
import { RiCloseLine} from "react-icons/ri";
import { Link } from 'react-router-dom'

import Networks from '../../layout/networks'
const Modal = ({bool})=>{
    return(
        <div className="fsimage-container">
            <div className="centered">
                <div className="modal">
                   <div className="modalHeader">
                  <h5 className='modalHeading'><FiAlertTriangle/>INFO</h5>  <button className="closeBtn" onClick={bool}>
                    <RiCloseLine style={{marginBottom:"-3px"}} /></button>
                </div>
                <div className="modalContent">
                   <p>Encuentranos en redes sociales</p> 
                    <Networks />
                </div> 
                <div className="modalActions">
                    <div className="actionsContainer">
                    <button className="callBtn">
                        <a href="tel:3013820682">
                        <i><BsTelephoneOutbound /></i>
                        &nbsp;llamar
                        </a>
                        </button>
                    <button className="wppBtn">
                        <a href="https://api.whatsapp.com/send?phone=+573013820618">
                        <i><BsWhatsapp/></i>
                        &nbsp;mensaje
                        </a>
                    </button>
                    </div>
                
                </div>
                </div>
                
            </div>
        </div>
    );
}
export default Modal;