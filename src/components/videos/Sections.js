import { RiMusic2Fill } from "react-icons/ri";
import { videos } from './Data'
import VideoCard from './VideoCard'
const Sections = ({...props}) => {
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