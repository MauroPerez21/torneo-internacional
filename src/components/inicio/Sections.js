const Sections = ({...props}) => {
    return ( 
        <>
            <section>
                <div className="guiaIntro">
                    <div>
                        <div>
                        <h2>Villavicencio</h2>
                        <h3>"la puerta del llano"</h3>
                        <p>En la ciudad de Villavicencio se celebra el 54° Torneo Internacional del Joropo.</p> 
                        </div>
                    </div>    
                    <div className="guiaintroIcon">
                        <img src={props.icon} alt="" className="img"/>
                    </div>
                </div>
            </section>
       </>
        
     );
 }
 export default Sections