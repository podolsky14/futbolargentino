import React from 'react'
import mil020 from "../assets/img/mil020.png";
import mil021 from "../assets/img/mil021.png";


export default function Ceroequipo() {
    const h2Style = {
        display: "flex",
        justifyContent: "center"
      };
      const divStyle = {
        padding: "20px",
        display: "flex",
        justifyContent: "space-around",
        height: "800px"
      };
    return (
        <>
     <div className="decadas">
          
          <h2 style={h2Style}>2020-2022</h2><br/><br/>
       <div style={divStyle}>
         <div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        2020
   </button>
   
   <div className="modal fade" id="exampleModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="coloraño">Equipo Argentino del año: 2020</h5>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="centrarImagenEnModal" >
         <img src={mil020} alt="2020"/>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
         </div>
       </div>
     </div>
   </div><br/><br/>
   
   
   <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        2021
   </button>
   
   <div className="modal fade" id="exampleModal1" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
     <div className="modal-dialog">
       <div className="modal-content">
         <div className="modal-header">
           <h5 className="coloraño">Equipo Argentino del año: 2021</h5>
           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div className="centrarImagenEnModal" >
         <img src={mil021} alt="2021"/>
         </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
         </div>
       </div>
     </div>
   </div><br/><br/>
   
  
   
   </div>
   </div>
          </div>
        
        </>
    )
}