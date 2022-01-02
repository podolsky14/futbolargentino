import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import "../index.css";
import futbol from "../assets/img/futbolargentino.jpg";
export default function Home (){


    return(
        <>
     <div className="home" style={{ backgroundImage: ` linear-gradient(rgba(5, 7, 12, 0.75), rgba(5,7,12,0.75)),url(${futbol})` }}>
      <h1 className="bienvenidos">Bienvenidos al Salón de la Fama del Fútbol Argentino</h1>
        
        <br/>
        </div>
         <p className="d-flex m-3 ">  El fútbol argentino es uno de los más laureados y reconocidos del mundo. Sus comienzos se remontan hacia finales del siglo XIX, aunque solo era jugado mayormente por británicos -que habian traido el deporte rey a el continente americano-.
           Las primeras figuras nativas comenzaron a surgir en los albores del siglo XX como los hermanos Brown y el mediocampista ofensivo
           Arnold Watson Hutton. En la década de los 10´s, Racing Club dominaria el campeonato local de la mano del futbolista Alberto
           Ohaco, quien fuera quizás la primera gran superestrella del fútbol argentino. En los 20´s el fútbol local seguiria creciendo
           a pasos agigantados con Boca Juniors, Huracán, San Lorenzo, Independiente y Racing. La Selección Argentina se estableceria 
           definitivamente como una potencia mundial y el futbolista Manuel Seoane seria el más destacado de dicho periodo. En la
           década del 30 el futbol argentino se profesionaliza y en consecuencia su nivel mejora aún más con las gratas apariciones
           de Luis Monti, Raimundo Orsi y Antonio Sastre, entre otros grandes talentos. La Selección Argentina finaliza subcampeona
           del mundo en 1930. En la década siguiente, es una época de oro debido a gran generación de futbolistas como José Manuel
           Moreno, Adolfo Pedernera, Rinaldo Martino, Norberto Mendez y demás. Lamentablemente la Segunda Guerra Mundial impidió que
           las competiciones mundialistas se llevaran a cabo; sin embargo el seleccionado gana 4 Campeonatos Sudamericanos de forma 
           arrolladora. Por aquel entonces se destacó River Plate y su famoso equipo apodado como "La Máquina". En los 50´s River Plate
           sigue dominando el ámbito local y el seleccionado argentino alterna buenas y malas: ganando los Campeonatos Sudamericanos de 
           1957 y 1959; pero quedando afuera rapidamente en la Copa Mundial de 1958. Asimismo, Alfredo Di Stéfano fue indiscutidamente
           el mejor futbolista de la década, haciendo historia con el Real Madrid. En la década del 60, Boca Juniors, Racing Club,
           Estudiantes e Independiente se erigen como los principales equipos. La Selección Argentina hace un digno torneo mundialista
           en 1966 de la mano de un recordado equipo. En los 70´s surgen grandes figuras como Daniel Passarella, Mario Kempes, Ricardo Bochini, Norberto Alonso y
           Ubaldo Fillol. A nivel clubes, Independiente se establece como el rey de América al ser el club más ganador de la competición;
           y tanto River Plate como Boca Juniors dominan la segunda parte de la década. A nivel Selección, el conjunto albiceleste obtiene
           su primer campeonato mundialista en 1978, lo cual fue celebrado con gran júbilo en todo el pais. En los 80´s el genio Diego
           Maradona pone el tela de juicio el reinado de Pelé como el rey del fútbol al llevar al Seleccionado Argentino a ganar la Copa 
           Mundial de 1986 y al conducir al humilde Nápoli a ganar sendos títulos en Italia y Europa. En la década del 90, la Seleccion
           Nacional demuestra seguir estando en la elite ganando las Copas Américas de 1991 y 1993,
           de la mano de una gran generación de jugadores como Gabriel Batistuta, Fernando Redondo y Claudio Caniggia. En el ámbito local
           River Plate y Velez Sarfield serian los abanderados. En el siglo XXI, durante la primera década, Boca Juniors tiene su época
           dorada al ganar absolutamente todo a nivel local e internacional. Su figura, Juan Román Riquelme, seria junto a Juan Sebastian Veron y Javier Zanetti, el 
           jugador más destacado. Por su parte la Selección Argentina sigue manteniendose entre las mejores del mundo, aunque sin ganar ningun trofeo.
           En el siguiente decenio hasta la actualidad, Lionel Messi se alzaria como la gran superestrella mundial de la era, llegando a la final de la Copa Mundial en 2014 y obteniendo
           la Copa América de 2021. A nivel clubes, Boca Juniors y River Plate serian los más distinguidos.
         </p>
<br/><br/>

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={slide1} className="d-block w-100" alt="slide1"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Diego Armando Maradona</h5>
    
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={slide2} className="d-block w-100" alt="slide2"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Lionel Messi</h5>
      
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={slide3} className="d-block w-100" alt="slide3"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Alfredo Di Stéfano</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


         </>
    )
}