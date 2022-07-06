import { Link } from 'react-router-dom'
import { IoVideocam } from "react-icons/io5";
const SubMenu = () => {
 
    return ( 
        <>

            <Link to='/videos' >
            <button><i><IoVideocam/></i>&nbsp;videos</button>
            </Link>
        </>
        
     );
}
 
export default SubMenu;