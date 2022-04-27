import React, { Fragment, useState } from 'react';
import Grafica from './grafica';

const Select = () => {

    const [categoria, setCategoria] = useState('ropa');
    const [producto, setProducto] = useState('Camisa');
    const [marca, setMarca] = useState('Adidas');

    const cambiarCat = (e) => {
        setCategoria(e.target.value);
        console.log(categoria)
    }

    const cambiarProd = (e) => {
        setProducto(e.target.value);
    }

    const cambiarMarca = (e) => {
        setMarca(e.target.value);
    }

    let frutasCamisa = 'Camisa';
    let CerealesPantalon = 'Pantalon';
    let marcaTipo1 = 'Adidas';
    let marcaTipo2 = 'Nike';

    if (categoria === 'comida') {
        frutasCamisa = 'Frutas';
        CerealesPantalon = 'Cereales';
        if (producto === 'Frutas') {
            let marcaTipo1 = 'Platano';
            let marcaTipo2 = 'Mango';
        }else{
            let marcaTipo1 = 'Trigo';
            let marcaTipo2 = 'Maiz';
        }
}
    else {
        frutasCamisa = 'Camisa';
        CerealesPantalon = 'Pantalon';
    }

    switch (producto) {
        case 'Frutas':
            marcaTipo1 = 'Platano';
            marcaTipo2 = 'Mango';
            break;

        case 'Cereales':
            marcaTipo1 = 'Trigo';
            marcaTipo2 = 'Maiz';
            break;

        case 'Camisa':
            marcaTipo1 = 'Adidas';
            marcaTipo2 = 'Nike';
            break;

        case 'Pantalon':
            marcaTipo1 = 'Puma';
            marcaTipo2 = 'Levi';
            break;
    }

    return (
        <Fragment>
            <div className='select'>
                <form>
                    <label className="categoria">Categoria: </label>
                    <select id='categoria' onChange={cambiarCat}>
                        <option value="ropa">Ropa</option>
                        <option value="comida">Comida</option>
                    </select >
                    <label className="producto">Producto: </label>
                    <select id='producto' onChange={cambiarProd}>
                        <option value={frutasCamisa}>{frutasCamisa}</option>
                        <option value={CerealesPantalon}>{CerealesPantalon}</option>
                    </select>
                    <label className="marca">Marca: </label>
                    <select id='marca' onChange={cambiarMarca}>
                        <option value={marcaTipo1}>{marcaTipo1}</option>
                        <option value={marcaTipo2}>{marcaTipo2}</option>
                    </select>
                </form>
            </div>
        </Fragment>
    );
}

export default Select;