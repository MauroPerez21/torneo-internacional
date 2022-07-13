import { RiMusic2Fill } from "react-icons/ri";
import { videos } from './Data'
import VideoCard from './VideoCard'
import GridLoader from "react-spinners/GridLoader";
import Rx from 'react'
const Sections = ({...props}) => {
    const[isPending,setIsPending] = Rx.useState(true)
    const [error, setError] = Rx.useState(null)
        Rx.useEffect(()=>{
            setTimeout(()=>{
                fetchVideos()
            },10000)
            }, []);
        const fetchVideos = async()=>{
        setIsPending(false)
        setError(null)
        return ;
        }
    return ( 
        <>
            <section>
                <div className="guiaIntro">
                    <div>
                        <div>
                        <h2>M&uacute;sica Popular de Los LLanos Orientales</h2>
                        </div>
                    </div>    
                    <div className="guiaintroIcon">
                        <i><RiMusic2Fill /></i>
                    </div>
                </div>
            </section>
            <section>
            {error && <div>{ error }</div>}
            {isPending && <div className="reactSpinners">
                <GridLoader/>
                cargando videos...
                </div>}    
            <div className="videoContainer">
              <div className="videoCard">  
            {videos.map((video)=>
                <VideoCard {...video} key={video.key} />
                )}</div>
                </div>
            </section>
       </>
        
     );
 }
 export default Sections