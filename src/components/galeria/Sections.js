import Rx from 'react';
import List from './List'
import useArray from '../hooks/useArray';
import SubMenu from './SubMenu'

const Sections = ({...props}) => {
    const handleFilter = async(id)=>{
        const newBlogs = await filterSome(id)
        setPopular(newBlogs)
    }

    const [popular, setPopular] = Rx.useState([])
    const[isPending,setIsPending] = Rx.useState(true)
    const [error, setError] = Rx.useState(null)
    const { filterSome } = useArray(popular)
    Rx.useEffect(()=>{
        setTimeout(()=>{
         fetchBlogs()
        },2000)
      }, []);
    const fetchBlogs = async()=>{
            //https://mauroperez21.github.io/festival/fotos.json
        await fetch('./items.json')
        .then(res=>{//console.log(res.ok)
            if(!res.ok){
                throw error('Unaccesible data!')
            }
            return res.json()
        }).then(data =>{
            setPopular(data)
            setIsPending(false)  
            setError(null)
           
        }).catch(err=>{
            setError(err.message)
        })
       
        return popular;
      }

      console.log(popular)
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
                <select className="slc1" id="slc1" onChange={()=>handleFilter(0)}>
                    <option value="2"></option>
                    <option value="0" onClick={()=>handleFilter(0)}>todos</option>
                    <option value="1" onClick={()=>handleFilter(1)}>econom&iacute;a</option>
                </select>
            <SubMenu />
            </div> 
            {error && <div>{ error }</div>}
            {isPending && <div className="reactSpinners">cargando im&aacute;genes...</div>}

            <List 
                blogs={popular}
            />

         </section>
        </>
     );
}
 
export default Sections;