import React from 'react'

import useToggle from '../../hooks/useToggle'
import {RiWhatsappFill} from 'react-icons/ri'
import './Whatsapp.styles.css'

const Wpp = () => {
    const [show, setShow] = useToggle(false)
    const popup = React.useRef()
    const button = React.useRef()
    React.useLayoutEffect(
        ()=>{
            setTimeout(()=>{
                setShow(false)
            },4000)
           
            if (popup.current == null || button.current == null) 
          return 
           const { top} = button.current.getBoundingClientRect()
           popup.current.style.top= `${top-20}px`
        }
    )
    return ( 
    <>
    <div
    className="fixed-wpp"
      ref={button}
      onMouseOver={setShow}
      ><a href="https://api.whatsapp.com/send?phone=+573106323631" className="icon-wpp">
        <RiWhatsappFill/>
          
          </a>
    </div>
         {show && (
             <div 
             className="overlay"
             ref={popup}
             >
                 Envia un mensaje
             </div>
         )}
        </>
     );
}
 
export default Wpp;
