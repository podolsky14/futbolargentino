import { Link} from "react-router-dom"
import "../index.css"
import dts from "../assets/img/dt.jpg";
export default function Dts(){

    const h1Style = {
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      }

      
      const colores = {
        color: "white"
      }

    return(
      <div className="dts" style={{ backgroundImage: ` linear-gradient(rgba(5, 7, 12, 0.75), rgba(5,7,12,0.75)),url(${dts})` }}>
            <h1 style={h1Style}>DIRECTORES TÉCNICOS</h1>
        <div className="layoutdts" >
 
     <Link style={colores} to="/listagraldt">LOS 50 MEJORES DTS</Link>
<Link style={colores} to="/dtoftheyear"> DIRECTOR TECNICO DEL AÑO</Link>



        </div>
        </div>
    )
}