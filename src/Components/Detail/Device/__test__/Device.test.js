import React from 'react';
import {render, screen} from '@testing-library/react';
import {initialDevice} from "../../utils/initialDevice";
import Device from "../Device";
import {device1, device2} from "../../mocks/Device";

describe('renders Device initial device', () => {
    it('renders Device initial device', () => {
        render(
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
                <Device device={initialDevice} index={1}  />
                </tbody>
            </table>
        )
        const linkElement = screen.getByText(/1/i);
        expect(linkElement).toBeInTheDocument();
    })

    it('renders Device device1', () => {
        render(
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
                <Device device={device1} index={1}  />
                </tbody>
            </table>
        );
        const product = screen.getByText(/Laptop/i);
        const brand = screen.getByText(/Lenovo/i);
        const model = screen.getByText(/T14/i);
        const serial = screen.getByText(/Serial1/i);
        const entryDate = screen.getByText(/11\/1\/2022/i);
        const image = screen.getByText(/Sin Imagen/i);
        const business = screen.getByText(/GSG/i);

        expect(product).toBeInTheDocument();
        expect(brand).toBeInTheDocument();
        expect(model).toBeInTheDocument();
        expect(serial).toBeInTheDocument();
        expect(entryDate).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(business).toBeInTheDocument();
    })

    it('renders Device device2', () => {
        render(
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
                <Device device={device2} index={2}  />
                </tbody>
            </table>
        );
        const index = screen.getByText(/2/i);
        const product = screen.getByText(/Laptop/i);
        const brand = screen.getByText(/Lenovo/i);
        const model = screen.getByText(/T14/i);
        const serial = screen.getByText(/Serial2/i);
        const entryDate = screen.getByText(/12\/1\/2022/i);
        const image = screen.getByText(/ScotiaTech/i);
        const business = screen.getByText(/GBS/i);
        const pxeDate = screen.getByText(/11\/7\/2022/i)

        expect(product).toBeInTheDocument();
        expect(brand).toBeInTheDocument();
        expect(model).toBeInTheDocument();
        expect(serial).toBeInTheDocument();
        expect(entryDate).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(business).toBeInTheDocument();
        expect(pxeDate).toBeInTheDocument();
        expect(index).toBeInTheDocument()
    })

    it('render Device handleShow', () => {
        const showHandle = () => {
            console.log('showHandle: ', device2)
        }
        render(
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
                <Device device={device2} index={1} handleShowDevice={showHandle} />
                </tbody>
            </table>
        );

    })
})



