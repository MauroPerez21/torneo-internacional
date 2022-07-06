import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const Lazy = () => {
    let Colors = [
        "#ffcc00",
        "#ff9933",
        "#0066ff",
        "#ff1a1a",
        "#ff00ff",
           ]
        let [loading] = React.useState(true);
        let [color ] = React.useState(Colors[Math.floor(Math.random()*5)]);
          
    return ( 
            <ScaleLoader color={color} loading={loading} size={300}/>  
     );
}
 
export default Lazy;