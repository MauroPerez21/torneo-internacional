
import Header from '../layout/header';
//import Networks from '../layout/networks';
import Icon from '../assets/brochure.jpg'
import Sections from './Sections'

import Loading from '../layout/loading'
import useToggle from '../hooks/useToggle';
import R from 'react'
const Inicio = () => {
   const [isLazy, setIsLazy] = useToggle(true)
   R.useLayoutEffect(()=>{
      setTimeout(()=>{
         setIsLazy(false)
         return;
      },1000)
   },[isLazy])
    return (   
         <>
         <Header title="inicio"/>
         {isLazy?<Loading/>:
                  <div className="container">
                     <Sections 
                     icon={Icon}
                     />
                  </div>
         }
         </>
     );
}
 
export default Inicio;