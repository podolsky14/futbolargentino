import { Link} from "react-router-dom"
import clubes from "../assets/img/clubes.jpg";
export default function Clubes (){
  
    const h1 = {
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      }

      const colores = {
        color: "white"
      }
    

    return(
      <div className="clubes" style={{ backgroundImage: ` linear-gradient(rgba(5, 7, 12, 0.75), rgba(5,7,12,0.75)),url(${clubes})` }}>

<h1 style={h1}>CLUBES</h1>
        <div className="layoutclubes">
     
 <Link style={colores} to="/listagralclubes">LOS CLUBES MAS GRANDES</Link>
     
<Link style={colores} to="/cluboftheyear">CLUB DEL AÑO</Link>
</div>
       </div>
    )
}