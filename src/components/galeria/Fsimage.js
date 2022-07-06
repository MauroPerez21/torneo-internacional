import Rx from 'react'
import { useParams } from 'react-router-dom'
import items from './Items'
function FsImage() {

    let params = useParams()
    let id = Number(params.id)
    const myImage = items.find((i) => i.id === id);
    Rx.useEffect(()=>{
       console.log(id)
    })
    return ( 
    <div className="fsimage-container">
            <div>
                <h1>Title:</h1>
                <p>neo</p>
            </div>
            <img
            src={myImage.src}
            alt="neo"
            className="centered"
            />
        </div>
     );
}
 
export default FsImage;