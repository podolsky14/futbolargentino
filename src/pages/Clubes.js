import { Link} from "react-router-dom"
export default function Clubes (){
  
    
    const h1 = {
        padding: "20px",
        display: "flex",
        justifyContent: "center"
      
      };
    const divStyle = {
        color: 'white',
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        height: "800px"
      };

    return(
       <div className="clubes">

<h1 style={h1}>CLUBES</h1>
        <div style={divStyle} >
     
 
     <Link style={divStyle} to="/listagralclubes">LOS CLUBES MAS GRANDES</Link>
     
<Link style={divStyle} to="/cluboftheyear">CLUB DEL AÑO</Link>
</div>
       </div>
    )
}