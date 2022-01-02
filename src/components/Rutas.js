import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Arqueros from "../pages/Arqueros";
import Centrales from "../pages/Centrales";
import Laterales from "../pages/Laterales";
import MedDef from "../pages/MedDef";
import MedOf from "../pages/MedOf";
import Extremos from "../pages/Extremos";
import Forwards from "../pages/Forwards";
import Centrodelanteros from "../pages/Centrodelanteros";
import Posiciones from "../pages/Posiciones";
import ListaGral from "../pages/ListaGral";
import Jugadoroftheyear from "../pages/Jugadoroftheyear";
import Jugadores from "../pages/Jugadores";
import Dts from "../pages/Dts";
import Equipos from "../pages/Equipos";
import Dtoftheyear from "../pages/Dtoftheyear";
import Listagraldt from "../pages/Listagraldt";
import Clubes from "../pages/Clubes";
import Listagralclubes from "../pages/Listagralclubes";
import Cluboftheyear from "../pages/Cluboftheyear";
import Treintaequipo from "../pages/Treintaequipo";
import Cuarentaequipo from "../pages/Cuarentaequipo";
import Cincuentaequipo from "../pages/Cincuentaequipo";
import Sesentaequipo from "../pages/Sesentaequipo";
import Setentaequipo from "../pages/Setentaequipo";
import Ochentaequipo from "../pages/Ochentaequipo";
import Noventaequipo from "../pages/Noventaequipo";
import Ceroequipo from "../pages/Ceroequipo";
import Diezequipo from "../pages/Diezequipo";
import Veinteequipo from "../pages/Veinteequipo";
import Contacto from "../pages/Contacto";

export default function Rutas() {
    return (
        <div>
    <BrowserRouter>
  <Routes>
     
      <Route path="/" element={<Layout/>}>  

      
   <Route index element={<Home/>}/>
   
   <Route path="dts" element={<Dts/>}/>
   <Route path="/dtoftheyear" element={<Dtoftheyear/>}/>
   <Route path="/listagraldt" element={<Listagraldt/>}/>

   <Route path="clubes" element={<Clubes/>}/>
   <Route path="listagralclubes" element={<Listagralclubes/>}/>
   <Route path="cluboftheyear" element={<Cluboftheyear/>}/>
   
<Route path="jugadores" element={<Jugadores/>}/>
<Route path="listagral" element={<ListaGral/>}/>
<Route path="/jugadoroftheyear" element={<Jugadoroftheyear/>}/>
<Route path="/posiciones" element={<Posiciones/>}>
<Route path="arqueros" element={<Arqueros/>}/>
<Route path="centrales" element={<Centrales/>}/>
<Route path="laterales" element={<Laterales/>}/>
<Route path="MedDef" element={<MedDef/>}/>
<Route path="MedOf" element={<MedOf/>}/>
<Route path="extremos" element={<Extremos/>}/>
<Route path="forwards" element={<Forwards/>}/>
<Route path="centrodelanteros" element={<Centrodelanteros/>}/>
<Route path="*" element={<Navigate to="/posiciones"/>}/>
   </Route>
   
   <Route path="equipos" element={<Equipos />}/>
  <Route path="treintaequipo" element={<Treintaequipo/>}/>
  <Route path="cuarentaequipo" element={<Cuarentaequipo/>}/>
  <Route path="cincuentaequipo" element={<Cincuentaequipo/>}/>
  <Route path="sesentaequipo" element={<Sesentaequipo/>}/>
  <Route path="setentaequipo" element={<Setentaequipo/>}/>
  <Route path="ochentaequipo" element={<Ochentaequipo/>}/>
  <Route path="noventaequipo" element={<Noventaequipo/>}/>
  <Route path="ceroequipo" element={<Ceroequipo/>}/>
  <Route path="diezequipo" element={<Diezequipo/>}/>
  <Route path="veinteequipo" element={<Veinteequipo/>}/>

  <Route path="contacto" element={<Contacto/>}/>


   <Route path="*" element={<Navigate to="/"/>}/>
      </Route>



  </Routes>
  
  </BrowserRouter>

            
        </div>
    )
}
