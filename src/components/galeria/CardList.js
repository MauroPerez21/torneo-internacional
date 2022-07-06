import {RiFullscreenLine, RiImage2Line} from 'react-icons/ri'
const CardList = () => {
    return ( 
<div className="card-container">
   <div className="card">
    <div className="zcard-header">
       <h4>
        Card Header
        </h4> 
        <i><RiImage2Line/></i>
    </div>
    <div className="zcard-body">
      <img className="img"
      src="https://i.imgur.com/RF2a3PB.jpg"
      alt=""
      />  
    </div>
    <div class="zcard-footer">   
        <button>
            <i><RiFullscreenLine/></i>
        </button>
    </div>
</div> 
</div>

     );
}
 
export default CardList;