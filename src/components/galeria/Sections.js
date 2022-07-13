import Rx from 'react';
import List from './List'
import useArray from '../hooks/useArray';
import SubMenu from './SubMenu'
import Items from './Items'
import GridLoader from "react-spinners/GridLoader";
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
const Sections = ({...props}) => {
    const handleFilter = async(popular)=>{
        const something = document.querySelector('#slc1')
        const id = Number(something.value)
        //console.log(typeof id)
        let newBlogs = []
       switch(id){
        case 0:
            setArray(popular)
            break;
            case 1:
               newBlogs = await filterSome(id)
                    setArray(newBlogs)
                break;
                case 2:
                    newBlogs = await filterSome(id)
                    setArray(newBlogs)
                    break;
                    default:
                        setArray(popular)
                    console.log(`Sorry, we are out of ${id}.`);
       }
        
    }

    const [popular, setPopular] = Rx.useState([])
    const[isPending,setIsPending] = Rx.useState(true)
    const [error, setError] = Rx.useState(null)
    const { filterSome } = useArray(popular)
    const [array, setArray] = Rx.useState([])
    Rx.useEffect(()=>{
        setTimeout(()=>{
         fetchBlogs()
        },2000)
      }, []);
    const fetchBlogs = async()=>{
            //https://mauroperez21.github.io/festival/fotos.json
            setPopular(Items)
      setArray(Items)
      setIsPending(false)
      setError(null)
        return popular;
      }

      //console.log(popular)
    return ( 
        <>
        
        <section>
            <div className="guiaIntro">
               <div>
               <div>
                <h2>Conoce</h2>
               <p>Todo lo que el departamento del Meta y Villavicencio te ofrecen</p> 
               </div>
               </div>
               <div className="guiaintroIcon">
               <img src={props.orinoquia} alt="" className="img"/>
               </div>
            </div>
         </section>   
         <section>
            <div className="filters">
            <label  htmlFor="slc1">Filtros</label>
                <select className="slc1" id="slc1" onChange={()=>handleFilter(popular)}>
                    <option value="0">todas</option>
                    <option value="1" onClick={()=>handleFilter(popular)}>paisajes</option>
                    <option value="2" onClick={()=>handleFilter(popular)}>transporte</option>
                  
                </select>
            <SubMenu />
            </div> 
            {error && <div>{ error }</div>}
            {isPending && <div className="reactSpinners">
            <GridLoader/>    
            cargando im&aacute;genes...</div>}
            <motion.div layout>
                <AnimatePresence>
                   <List blogs={array} />  
                </AnimatePresence>
               
            </motion.div>
            
         </section>
        </>
     );
}
 
export default Sections;