
import { NavLink, Outlet} from "react-router-dom"
export default function Posiciones(){
    const divStyle = {
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      };

      const ul = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px"
      }

      const center = {
       display: "flex",
       justifyContent: "center"
      }
      
    return(
        <div style={divStyle} className="posiciones">
      
       <section >
       <h1 style={center}>POSICIONES</h1><br/>
       <ul style={ul}>
<NavLink  to="arqueros" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>ARQUEROS</li></NavLink><br/>
<NavLink to="centrales" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} }  ><li>DEFENSORES CENTRALES</li></NavLink><br/>
<NavLink  to="laterales" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>DEFENSORES LATERALES</li></NavLink><br/>
<NavLink  to="meddef" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>MEDIOCAMPISTAS DEFENSIVOS</li></NavLink><br/>
<NavLink  to="medof" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>MEDIOCAMPISTAS OFENSIVOS</li></NavLink><br/>
<NavLink  to="extremos" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>EXTREMOS</li></NavLink><br/>
<NavLink to="forwards" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>SEGUNDOS DELANTEROS</li></NavLink><br/>
<NavLink  to="centrodelanteros" style={({isActive}) => isActive ? {color: "goldenrod"}: {color: "white"} } ><li>CENTRODELANTEROS</li></NavLink>
</ul>
</section>
<section className="navs">

<Outlet/>
</section>

        
        </div>
    )
}