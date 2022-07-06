import React from 'react'
import Header from '../layout/header'
import GoogleCalendarIcon from '../assets/pngaaa.com-430301.png'
import './Eventos.styles.css'
import Sections from './Sections'

import Loading from '../layout/loading'
import useToggle from '../hooks/useToggle';
import R from 'react'
const Eventos = () => {
  const [isLazy, setIsLazy] = useToggle(true)
   R.useLayoutEffect(()=>{
      setTimeout(()=>{
         setIsLazy(false)
         return;
      },1000)
   },[isLazy])
    return ( 
    <>
        <Header title="programacion"/>
        {isLazy?<Loading />:
        
        <div className="container">
          <Sections
          calendarIcon={GoogleCalendarIcon}
          />
        </div>
      }
    </>
     );
}
 
export default Eventos;