import React, { Fragment, useState } from 'react';

const Select = () => {

    const [categoria, setCategoria] = useState('ropa');
    const [producto, setProducto] = useState('Camisa');
    // const [marca, setMarca] = useState('Adidas');
    const [frutasCamisa, setFrutasCamisa] = useState('Camisa')
    const [cerealesPantalon, setCerealesPantalon] = useState('Pantalon')
    const [marcaTipo1, setMarcaTipo1] = useState('Adidas')
    const [marcaTipo2, setMarcaTipo2] = useState('Nike')

    const cambiarCat = (e) => {
        setCategoria(e.target.value);
        if (categoria === 'comida') {
            setFrutasCamisa('Frutas')
            setCerealesPantalon('Cereales')
            if (producto === 'Frutas') {
                setMarcaTipo1('Platano');
                setMarcaTipo2('Mango');
            } else {
                setMarcaTipo1('Trigo');
                setMarcaTipo2('Maiz');
            }
        }
    }

    const cambiarProd = (e) => {
        setProducto(e.target.value);
    }

    const cambiarMarca = (e) => {
        setMarcaTipo1(e.target.value);
    }


    // if (categoria === 'comida') {
    //     frutasCamisa = 'Frutas';
    //     CerealesPantalon = 'Cereales';
    //     if (producto === 'Frutas') {
    //         marcaTipo1 = 'Platano';
    //         marcaTipo2 = 'Mango';
    //     } else {
    //         marcaTipo1 = 'Trigo';
    //         marcaTipo2 = 'Maiz';
    //     }
    // }
    // else {
    //     frutasCamisa = 'Camisa';
    //     CerealesPantalon = 'Pantalon';
    // }

    switch (producto) {
        case 'Frutas':
            setMarcaTipo1('Platano');
            setMarcaTipo2('Mango');
            break;

        case 'Cereales':
            setMarcaTipo1('Trigo');
            setMarcaTipo2('Maiz');
            break;

        case 'Camisa':
            setMarcaTipo1('Adidas');
            setMarcaTipo2('Nike');
            break;

        default:
            setMarcaTipo1('Puma');
            setMarcaTipo2('Levi');
            break;
    }

    console.log(categoria)

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
                        <option value={cerealesPantalon}>{cerealesPantalon}</option>
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