
import Header from '../layout/header'
import './css/Guia.styles.css'
import GoogleMapIcon from '../assets/pngaaa.com-6420801.png'
import Sections from './Sections'
import Loading from '../layout/loading'
import useToggle from '../hooks/useToggle';
import R from 'react'
const Lugares = () => {
const [isLazy, setIsLazy] = useToggle(true)
   R.useLayoutEffect(()=>{
      setTimeout(()=>{
         setIsLazy(false)
         return;
      },1000)
   },[isLazy])
    return ( 
    <>
    <Header title="Mapas"/>
    {isLazy?<Loading/>:
    <div className="container">
            <Sections 
            googlemap={GoogleMapIcon}
            />
    </div>
} 
    </>
    );
}
 
export default Lugares;