import React, { useState} from 'react';



function App() {


  //let taskit =["jutska 1", "jutska 2", "jutska 3", "jutska 4"]

  const [taskit,paivitaTaskit] = useState([])
  

  const [uusiTaski, paivitaUusiTaski] = useState("")

  function lisaaTaski() {
    //alert("Morjesta, täällä nappi moi vaan")
    //alert(uusiTaski)
    //taskit.push(uusiTaski)
    let taskitKopio = [...taskit] // spread-operaattori on ...
    //taskitKopio.push(uusiTaski)
    taskitKopio.push({"id": Date.now(), "teksti": uusiTaski })
    paivitaTaskit(taskitKopio)
    console.log(taskitKopio)
    paivitaUusiTaski("")
  }

    function poistaTaski(taskinId) {
      let taskitKopio = [...taskit]
      let karsittuLista =taskitKopio.filter((taski) => taski.id !== taskinId)
      paivitaTaskit(karsittuLista)
    }
  return (
    <div className="App">
      <p>Varmistusheippa</p>
      <input type="text" value={uusiTaski} onChange={(e)=> paivitaUusiTaski(e.target.value)}/>
      <input type="button" value="lisää taski" onClick={() => lisaaTaski()} />
      <ul>
        { taskit.map( yksittainenTaski =>  <li>{yksittainenTaski.teksti}<button onClick={() => poistaTaski(yksittainenTaski.id)}>x</button> </li>) }
      </ul>
      {/*
        tehtävien poistaminen
      */}
    </div>
  );
}

export default App;
