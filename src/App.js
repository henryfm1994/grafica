import React, { useEffect, useState } from 'react';
import './assets/css/App.css';
import Grafica from "./components/grafica";
import rojo from './assets/images/rojo.jpg'
import axios from 'axios';

function App() {

  const [categoria, setCategoria] = useState('Ropa');
  const [producto, setProducto] = useState('Camisa')
  const [producto1, setProducto1] = useState('Camisa')
  const [producto2, setProducto2] = useState('Pantalon')
  const [marTipo, setMarTipo] = useState('')
  const [marcaTipo, setMarcaTipo] = useState(['Camisa1', 'Camisa2'])

  const cambiarCat = (e) => {
    setCategoria(e.target.value);
  }

  const cambiarProd = (e) => {
    setProducto(e.target.value);
  }

  const cambiarMarca = (e) => {
    setMarTipo(e.target.value);
  }

  const [ramdon, setRamdon] = useState([]);

  const getData = () => {
    axios.get("http://localhost:3001/")
      .then(res => {
        setRamdon(res.data)
      })
  }

  useEffect(() => {

    getData()

    if (categoria === 'comida') {
      setProducto1('Frutas')
      setProducto2('Cereales')
      setMarTipo('Fruta1')
      setMarcaTipo(['Fruta1', 'Fruta2'])
    }
    else {
      setProducto1('Camisa')
      setProducto2('Pantalon')
      setMarTipo('Camisa1')
      setMarcaTipo(['Camisa1', 'Camisa2'])
    }
  }, [categoria])

  useEffect(() => {

    getData()

    switch (producto) {
      case 'Frutas':
        setMarcaTipo(['Fruta1', 'Fruta2'])
        break;

      case 'Cereales':
        setMarcaTipo(['Cereal1', 'Cereal2'])
        break;

      case 'Camisa':
        setMarcaTipo(['Camisa1', 'Camisa2'])
        break;

      case 'Pantalon':
        setMarcaTipo(['Pantalon1', 'Pantalon2'])
        break;

      default:
        break;
    }

  }, [producto])

  useEffect(() => {
    getData()
  }, [marTipo])

  return (
    <div>
      <div id="header">
        <nav id='menu'>
          <span className='menu' >Menu</span>
          <span className='user'> <img src={rojo} id='rojo' alt='rojo' /> User Name</span>
          <span className='report'>Sales Report</span>
        </nav>
      </div>

      <div className='select'>
        <form>
          <label className="categoria">Categoria: </label>
          <select id='categoria' onChange={cambiarCat}>
            <option value="ropa">Ropa</option>
            <option value="comida">Comida</option>
          </select >
          <label className="producto">Producto: </label>
          <select id='producto' onChange={cambiarProd}>
            <option value={producto1}>{producto1}</option>
            <option value={producto2}>{producto2}</option>
          </select>
          <label className="marca">Marca: </label>
          <select id='marca' onChange={cambiarMarca}>
            {
              marcaTipo.map((mt, index) =>
                <option key={index} value={mt}>{mt}</option>
              )}
          </select>
        </form>
      </div>
      <Grafica getData={getData} ramdon={ramdon} setRamdon={setRamdon} />
    </div>
  );
}

export default App;
