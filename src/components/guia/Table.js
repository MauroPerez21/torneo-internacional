const Table = () => {
    return ( 
        <table className="table">
            <thead>
            <tr className="heading">
                <th>lugar</th>
                <th>direcci&oacute;n</th>
                <th>latitud</th>
                <th>longitud</th>
                <th>localizar</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="lugar">cerro cristo rey</td>
                    <td data-label="direccion" ></td>
                    <td data-label="latitud">4.1512861</td>
                    <td data-label="longitud">-73.6392299</td>
                    <td data-label="mapa">
                        <button>mapa</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="lugar">parque del hacha</td>
                    <td data-label="direccion" >cl 36 s/n</td>
                    <td data-label="latitud">4.1487813</td>
                    <td data-label="longitud">-73.6346223</td>
                    <td data-label="mapa">
                        <button>mapa</button>
                    </td>
                </tr>
                <tr>
                    <td data-label="lugar">cc villacentro</td>
                    <td data-label="direccion" >Barrio Nuevo, Av 40, Puente El Maizaro #26C - 10</td>
                    <td data-label="latitud">4.141239</td>
                    <td data-label="longitud">-73.6351035</td>
                    <td data-label="mapa">
                        <button>mapa</button>
                    </td>
                </tr>
                
            </tbody>    
            </table>
     );
}
 
export default Table;