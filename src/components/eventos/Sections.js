import Programacion from '../layout/carrusel'
const Sections = ({...props}) => {
    return ( 
    <>
        <section>
            <div className="guiaIntro">
            <div>
                <div>
                <h2>Calendario</h2>
                <p>No te pierdas m&aacute;s de 50 eventos del torneo internacional del joropo</p> 
                </div>
            </div>
            <div className="guiaintroIcon">
                <img src={props.calendarIcon} alt="" className="img"/>
            </div>
            </div>
        </section>
          
          <section>
            <Programacion />
          </section>
    </> 
    );
}
 
export default Sections;