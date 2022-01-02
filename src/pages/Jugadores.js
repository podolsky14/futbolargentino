import { Link} from "react-router-dom"
import "../index.css"
import maradona from "../assets/img/maradona.jpg";
export default function Jugadores (){
    
  const colores = {
    color: "white"
  }
  
    const h1 = {
      padding: "20px"
      };

    return(
<div className="jugadores" style={{ backgroundImage: ` linear-gradient(rgba(5, 7, 12, 0.75), rgba(5,7,12,0.75)),url(${maradona})` }}>

        <h1 style={h1} className="d-flex justify-content-center">JUGADORES</h1>
        <div className="layoutjugadores" >
     
<Link style={colores} to="/posiciones">POSICIONES</Link>
<Link style={colores} to="/listagral">LOS 50 MEJORES JUGADORES</Link>
<Link style={colores} to="/jugadoroftheyear">JUGADOR DEL AÑO</Link>


     
        </div>
        </div>
    )
}