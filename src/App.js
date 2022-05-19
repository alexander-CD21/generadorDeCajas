import './App.css';
import { useState } from 'react';
import Espacios from './Componentes/Bloque/Espacios';

function App() {
  /*
  const[Color, setColor] = useState("");
  const[Altura, setAltura] = useState(0);
  const[cuadrado, setCuadrado] = useState([]);
  

  const colorFondo = (event) => {
    event.preventDefault();
    
    setCuadrado(()=> (
                    [...cuadrado,
                    <div style={{background : Color, height : Number(Altura),width:Number(Altura), display: 'inline-flex'  }}> <p>  </p> </div>]
                    ));
    setColor("");
    setAltura("");
  }
  */
  return (
    <div className="App">
      <Espacios />
      {/*
      <form onSubmit = {colorFondo}>
        <div>
        <label htmlFor='color'>
          Color : 
        </label>
        <input type='text' id='color' 
               value={Color} onChange= { (event) => setColor(event.target.value)}/>
        </div>

        <div>
        <label htmlFor='altura'>
          Altura : 
        </label>
        <input type='number' id='altura' 
               value={Altura} onChange= { (event) => setAltura(event.target.value)}/>
        </div>

        <div>
          <button type='submit'>
            ADD
          </button>
        </div>

      </form>
  */}
      {/*
        <div>
          {cuadrado}
        </div>
*/}
    
    </div>
  );
}

export default App;
