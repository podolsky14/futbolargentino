import React, {useState, useEffect}  from 'react'
import "../index.css"
const initiallForm = {
    text: "",
    email: "",
    mensaje: ""
}

export default function Contacto() {
const [form, setForm] = useState(initiallForm)
const [visible, setvisible] = useState(false)
const [borrarform, setborrarform] = useState(false)
const divStyle = {
    padding: "20px",
  };

  const enviar = {
    color: "#668cff",
  };

  useEffect(() => {
    if(visible)
    console.log("Un nuevo formulario ha sido enviado")
      
  }, [visible])

const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
 e.preventDefault()
setvisible(true)
setborrarform(true)
}


    return (
       <div  style={divStyle}>
 <h1 className="contacto">CONTACTO</h1><div></div><br/>
 {visible &&<h1 className='bienvenido'>Mensaje enviado, en breve nos comunicaremos con usted.</h1>}
 {!borrarform &&<form className="formularioContacto" onSubmit={handleSubmit}>
<strong>Nombre y apellido</strong>   
<input type="text" id="text" name="text" onChange={handleChange} required  value={form.text }/><br/>
<strong>Email</strong>
<input type="email" id="email" name="email" onChange={handleChange} required value= {form.email || ""} /><br/>
<strong>Mensaje</strong>
<textarea id="mensaje" name="mensaje" cols="46" rows="10" className='textarea'  onChange={handleChange} required  value= {form.mensaje || ""} /> <br/>
<input type="submit" id="submit" name="submit" style={enviar}/>
       </form>
       
       }
     


       
       </div>
    )
}
