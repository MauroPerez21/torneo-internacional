import { RiFullscreenLine, RiImage2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom'
import { motion} from "framer-motion/dist/framer-motion";
const List = ({blogs}) =>{  
    return( 
      <div className="card">
        {blogs.map(blog=>(

<motion.div 
  animate={{opacity:1, scale:1}} 
  initial={{opacity:0, scale:0}} 
  exit={{opacity:0, scale:0}}
  transition={{duration:1}}
  layout 
className="card-container" key={blog.id}>
<div className="card">
 <div className="zcard-header">
    <h4>
     {blog.descr}
     </h4> 
     <i><RiImage2Line/></i>
 </div>
 <div className="zcard-body">
   <img className="img"
   src={blog.src}
   alt=""
   />  
 </div>
 <div className="zcard-footer">   
     <button>
      <Link to={`/galeria/${blog.id}`}>
         <i><RiFullscreenLine/></i>
      </Link>
     </button>
 </div>
</div> 
</motion.div>

        ))}  
      </div>

    )
    
}
export default List;
