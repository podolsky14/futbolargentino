import { NavLink, Outlet } from "react-router-dom"
import salondelafamaimagen from "../assets/img/salondelafamaimagen.png"
import "../index.css"

export default function Layout (){
    
    

    return(
        < >
        <main className="titulo">
        
            
<NavLink style={({isActive}) => isActive ? {color: "goldenrod"}: {} } to="/"><img  src={salondelafamaimagen} alt="salondelafamaimagen" /> </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<nav >
<NavLink style={({isActive}) => isActive ? {color: "goldenrod"}: {} } to="jugadores">JUGADORES </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<NavLink style={({isActive}) => isActive ? {color: "goldenrod"}: {} } to="dts">ENTRENADORES</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<NavLink style={({isActive}) => isActive ? {color: "goldenrod"}: {} } to="equipos">EQUIPOS</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<NavLink style={({isActive}) => isActive ? {color: "goldenrod"}: {} } to="clubes">CLUBES</NavLink>
</nav>
        </main>
        <section>
    <Outlet/>
</section>
<footer className="layoutfooter">

<img src={salondelafamaimagen} alt="salondelafamaimagen" className="salondelafamaimagen"/> 
<nav className="contactofooter" >
<NavLink style={({isActive}) => isActive ? {color: "black"}: {} } to="contacto"><p >CONTACTO</p></NavLink>
</nav>
</footer>


        </>
    )
}