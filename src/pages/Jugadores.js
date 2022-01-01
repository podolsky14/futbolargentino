import { Link} from "react-router-dom"
import "../index.css"
export default function Jugadores (){
 

    const h1 = {
      padding: "20px"
      };

    const divStyle = {
        color: 'white',
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        height: "800px"
      };

    return(
<div className="jugadores">

        <h1 style={h1} className="d-flex justify-content-center">JUGADORES</h1>
        <div style={divStyle} >
     
<Link style={divStyle} to="/posiciones">POSICIONES</Link>
<Link style={divStyle} to="/listagral">LOS 50 MEJORES JUGADORES</Link>
<Link style={divStyle} to="/jugadoroftheyear">JUGADOR DEL AÑO</Link>


     
        </div>
        </div>
    )
}