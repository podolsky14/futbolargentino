
export default function ListaGral (){
    const divStyle = {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      };

      const messi = {
   color: "gold"
      };
      const maradona = {
        color: "silver"
           };
           const distefano = {
            color: "burlywood"
               };

    return(
        
        <div style={divStyle}>
     <h1 className="cincuentamejores" >LOS 50 MEJORES FUTBOLISTAS<br/> ARGENTINOS DE LA HISTORIA</h1><br/>
<div>
<ul><strong>50:</strong> René Houseman</ul>
<ul><strong>49:</strong> Félix Loustau</ul>
<ul><strong>48:</strong> Ángel Di Maria</ul>
<ul><strong>47:</strong> Francisco Varallo</ul>
<ul><strong>46:</strong> Manuel Ferreira</ul>
<ul><strong>45:</strong> Ángel Clemente Rojas</ul>
<ul><strong>44:</strong> Carlos Bianchi</ul>
<ul><strong>43:</strong> Oscar Ruggeri</ul>
<ul><strong>42:</strong> Carlos Peucelle</ul>
<ul><strong>41:</strong> Alberto Ohaco</ul>
<ul><strong>40:</strong> Javier Mascherano</ul>
<ul><strong>39:</strong> Ernesto Grillo</ul>
<ul><strong>38:</strong> Carlos Sosa</ul>
<ul><strong>37:</strong> Miguel Brindisi</ul>
<ul><strong>36:</strong> Bernabé Ferreyra</ul>
<ul><strong>35:</strong> Omar Corbatta </ul>
<ul><strong>34:</strong> Manuel Seoane</ul>
<ul><strong>33:</strong> Carlos Tevez</ul>
<ul><strong>32:</strong> Néstor Rossi</ul>
<ul><strong>31:</strong> Sergio Aguero</ul>
<ul><strong>30:</strong> Juan Sebastián Verón</ul>
<ul><strong>29:</strong> René Pontoni</ul>
<ul><strong>28:</strong> Osvaldo Ardiles</ul>
<ul><strong>27:</strong> Luis Artime</ul>
<ul><strong>26:</strong> Silvio Marzolini</ul>
<ul><strong>25:</strong> Norberto Mendez</ul>
<ul><strong>24:</strong> Ángel Labruna</ul>
<ul><strong>23:</strong> Norberto Alonso</ul>
<ul><strong>22:</strong> Manuel Seoane</ul>
<ul><strong>21:</strong> Ángel Labruna</ul>
<ul><strong>20:</strong> Roberto Perfumo</ul>
<ul><strong>19:</strong> Rinaldo Martino</ul>
<ul><strong>18:</strong> Fernando Redondo</ul>
<ul><strong>17:</strong> Amadeo Carrizo</ul>
<ul><strong>16:</strong> Ricardo Bochini</ul>
<ul><strong>15:</strong> Juan Román Riquelme</ul>
<ul><strong>14:</strong> Raimundo Orsi</ul>
<ul><strong>13:</strong> Ubaldo Fillol</ul>
<ul><strong>12:</strong> Javier Zanetti</ul>
<ul><strong>11:</strong> Luis Monti</ul>
<ul><strong>10:</strong> Antonio Sastre</ul>
<ul><strong>09:</strong> Gabriel Batistuta</ul>
<ul><strong>08:</strong> Mario Kempes</ul>
<ul><strong>07:</strong> Omar Sivori</ul>
<ul><strong>06:</strong> Adolfo Pedernera</ul>
<ul><strong>05:</strong> Daniel Passarella</ul>
<ul><strong>04:</strong> José Manuel Moreno</ul>
<ul><strong>03:</strong> <span style={distefano}>Alfredo Di Stéfano</span></ul>
<ul><strong>02:</strong> <span style={maradona}>Diego Maradona</span></ul>   
<ul><strong>01:</strong> <span style={messi}>Lionel Messi</span></ul>  
</div>
        </div>
    )
}