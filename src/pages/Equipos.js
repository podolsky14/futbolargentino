import { Link} from "react-router-dom"
import "../index.css"
export default function Equipos(){
    const h1 = {
        color: 'white',
        padding: "20px",
        display: "flex",
        justifyContent: "center"
    
      };
    const divStyle = {
        color: 'white',
        padding: "20px",
        display: "flex",
        justifyContent: "center",
    
      };
      
      const tamaño = {
        height: "800px"
      }

    return(
<div className="equipo">
        <h1 style={h1}>EQUIPO DEL AÑO</h1>
        <div style={divStyle} >


<div style={tamaño}>
<Link style={divStyle}  to="/treintaequipo">DÉCADA DEL 30 (1930-39)</Link>
<Link style={divStyle}  to="/cuarentaequipo">DÉCADA DEL 40 (1940-49)</Link>
<Link style={divStyle}  to="/cincuentaequipo">DÉCADA DEL 50 (1950-59)</Link>
<Link style={divStyle}  to="/sesentaequipo">DÉCADA DEL 60 (1960-69)</Link>
<Link style={divStyle}  to="/setentaequipo">DÉCADA DEL 70 (1970-79)</Link>
</div> 
<div>
<Link style={divStyle}  to="/ochentaequipo">DÉCADA DEL 80 (1980-89)</Link>
<Link style={divStyle}  to="/noventaequipo">DÉCADA DEL 90 (1990-99)</Link>   
<Link style={divStyle}  to="/ceroequipo">DÉCADA DEL 00 (2000-09)</Link>
<Link style={divStyle}  to="/diezequipo">DÉCADA DEL 10 (2010-19)</Link> 
<Link style={divStyle}  to="/veinteequipo">DÉCADA DEL 20 (2020-22)</Link>   

</div>
</div>
    
</div>

 


    
    )
}