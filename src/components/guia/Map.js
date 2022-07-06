import React from 'react'
const Map = () => {
    const mapRef = React.useRef()
    const [coords, setCoords] = React.useState({latitude:'', longitude:''})

   
React.useEffect(()=>{
     const watchId = navigator.geolocation.watchPosition(position=>{
        setCoords(position.coords)
        console.log('latitude:'+coords.latitude + ',longitude:' +coords.longitude+')')
        console.log('watchId -' + watchId)
    })
})
    return ( 
        <div className='gMap'> 
                <iframe 
                title="mapa"
                ref={mapRef}
                width="100%" 
                height="400px" 
                src="https://maps.google.com/maps?q=4.1380422,-73.6251066&amp;z=15&amp;output=embed ">
                </iframe>
        </div>
     );
}
 
export default Map;