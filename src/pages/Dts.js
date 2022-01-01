import { Link} from "react-router-dom"
import "../index.css"
export default function Dts(){

    const h1Style = {
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
        <div className="dts">
            <h1 style={h1Style}>DIRECTORES TÉCNICOS</h1>
        <div style={divStyle}>
 
     <Link style={divStyle} to="/listagraldt">LOS 50 MEJORES DTS</Link>&nbsp;
<Link style={divStyle} to="/dtoftheyear"> DIRECTOR TECNICO DEL AÑO</Link>&nbsp;



        </div>
        </div>
    )
}