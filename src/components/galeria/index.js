
import Header from '../layout/header'
import Orinoquia from '../assets/pngaaa.com-5643258.png'
import './Galeria.styles.css'
import Sections from './Sections'
import Loading from '../layout/loading'
import useToggle from '../hooks/useToggle';
import R from 'react'
export default function Gallery(){
    const [isLazy, setIsLazy] = useToggle(true)
   R.useLayoutEffect(()=>{
      setTimeout(()=>{
         setIsLazy(false)
         return;
      },1000)
   },[isLazy])
    return (
        <>
        <Header title="galeria"/>
        {isLazy?<Loading/>:
                <div className="container">
                <Sections 
                    orinoquia={Orinoquia}
                />
                </div>
        }
        </>    
    );
}
