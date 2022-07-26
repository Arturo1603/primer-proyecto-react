
import { useState } from "react";
//* En este caso no hace especificar al momento de importar el index.js ya que por defecto lo hace, si tuviera otro nombre 
//* si especificamos
import Header from "./components/Header";
import Footer from "./components/Footer";
import Counter from "./components/Counter";
import './App.css';

function App() {
  
    const [counter, setCounter] = useState(0);
  
  // vamos a crear una funcion que permite aumentar el contador
    const increment = () => {
      setCounter(counter +1)
    }
    // setCounter: Es la funcion que esta cambiando el valor de counter
    // y adentro indico que el nuevo valor es counter + 1


    // Esta es una arrow funcion inline, no te olvides, el return esta implicito
    const decrease = () => setCounter(counter -1);

    return (
    // Solo puede haber un div por componente
    <div className="App">
      <Header/>
      <h1>Aprendiendo a programar con el profe Linder</h1>
      <Counter counter={counter} increment={increment} decrease={decrease}/>
      
      <Footer/>
    </div>
  );
}

export default App;
