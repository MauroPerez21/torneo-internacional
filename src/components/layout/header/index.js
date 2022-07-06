import React from 'react'
import Heading from './Heading'
import './Header.styles.css'
import Logo from '../../assets/corte.png'
import Modal from '../modal'
import useToggle from '../../hooks/useToggle'
const Header = ({title}) => {
    const modalRef = React.useRef()
    const handleClose = ()=>{
      setIsDisplaying(false)
    }
   const [isDisplaying, setIsDisplaying] = useToggle(false)
   
        return ( 
            <>
              <div className="start-container">
              <div className="img-wrapper">
                  <img src={Logo} alt="logo" className="logo"/>
              </div>
              <div className="wrapper arc-text">
                <Heading text="Villavicencio - Meta"/>
                <button className="btn-banner"
                onClick={setIsDisplaying}
                >contacto</button>
              </div>
              <div className="wrapper">
                <ul className="banner-list">
                <li>Colombia</li>
                <li>M&eacute;xico</li>
                <li>Estados Unidos</li>
                </ul>
              </div>
              </div>
              {isDisplaying &&(
              <Modal 
              ref={modalRef}
              bool={handleClose}
              />
              )}
              
              <div className="curly">
                <h1 className="title">{title}</h1>
                    <h3 className="sub-title">
                    54° torneo internacional del <em>joropo</em>
                    </h3>
                   
                </div>
            </>
         );
}
 
export default Header;