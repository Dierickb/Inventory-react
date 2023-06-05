import React from 'react'
import {render} from '@testing-library/react'

const AllTheProviders = ({children}) => {
    return (
        <table className='devices'>
            <thead>
                <tr className='titlesHead'>
                    <th>Id</th>
                    <th>Serial</th>
                    <th>Fabricante</th>
                    <th>Producto</th>
                    <th>Modelo</th>
                    <th>Ingresó</th>
                    <th>Scotia</th>
                    <th>PXE</th>
                    <th>Imagen</th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

const customRender = (ui, options) =>
    render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}