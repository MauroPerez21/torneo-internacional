
const Card = ({ day, month, date, time, name, place}) => {
    return ( 

<div className="slider-container" >
    <div className="slider-header">
        <h3>{day} de {month}</h3>
    </div>
    <div className="slider-subtitle"></div>
    <div className="slider-body">
        <div>
            <h2>
                "{name}"
            </h2>
            <div className="slider-list">
                <h3>Hora:&nbsp;</h3>
                <h4>{time}</h4>
            </div>
            <i></i>
            <div className="slider-list">
                <h3>Lugar:&nbsp;</h3>
                <h4>{place.name}</h4>
            </div>
        </div>
        <div
        className="slider-icon"
        >54° TIJ</div>
        
    </div>
    <div className="slider-footer">
        <p> {place.address}</p>
       
        <button>mapa</button>
    </div>
</div>
     );
}
 
export default Card;