
import Lazy from './Lazy'
import Harp from './Harp'
import './Loading.styles.css'

const Loading = () => {
    return (
        <>
        <div className="lazy">
        <Harp className="harp"/>
        <Lazy/>   
        </div>
        <div className="fsimage-container"></div>
        </>
      );
}
 
export default Loading;