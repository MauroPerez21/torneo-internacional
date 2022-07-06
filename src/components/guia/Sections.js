import Table from './Table'
import Map from './Map'
const Sections = ({...props}) => {
    return ( 
    <>
        <section>
            <div className="guiaIntro">
            <div>
            <div>
            <h2>Turismo</h2>
            <p>Haz un tour por Villavicencio y los municipios del Departamento del Meta</p> 
            </div>
            </div>
            <div className="guiaintroIcon">
            <img src={props.googlemap} alt="" className="img"/>
            </div>
            </div> 
        </section>
        <section>
            <Table />
        </section>
        <section>
            <Map/>
        </section>
    </>
       
     );
}
 
export default Sections;