import React from "react"

export default function Filter({setActiveGenre, activeGenre, setFiltered, popular}){
    React.useEffect(()=>{
        if(activeGenre === 0){
           setFiltered(popular)
        }
        const filtered = popular.filter((popular)=>popular.category === activeGenre )
        console.log(filtered)
        setFiltered(filtered) 
        return;  
    }, [activeGenre])
return(
    <div className="filter-container">
        
        <select className="slc1" id="slc1" onchange="populate()">
        <option value="0"></option>
        <option value="1">todos</option>
        <option value="2">municipios</option>
        <option value="3">econom&iacute;a</option>
      </select>
    </div>
)
}