import React, { Fragment } from 'react';

const Select = () => {
    return (
        <Fragment>
            <div className='select'>
                <form>
                    <label id="categoria">Categoria: </label>
                    <select>
                        <option value="Ropa">Ropa</option>
                        <option value="Comida">Comida</option>
                    </select>
                    <label id="producto">Producto: </label>
                    <select >
                        <option value="Frutas">Ropa</option>
                        <option value="Granos">Comida</option>
                    </select>
                    <label id="marca">Marca: </label>
                    <select >
                        <option value="nike">Ropa</option>
                        <option value="adidas">Comida</option>
                    </select>
                </form>
            </div>
        </Fragment>
    );
}

export default Select;