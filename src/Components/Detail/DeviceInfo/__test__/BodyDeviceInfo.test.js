import React from 'react';
import {render, screen} from '@testing-library/react';
import BodyDeviceInfo from "../BodyDeviceInfo";
import {device1, device2} from "../../mocks";
import {renderCorrectly} from "../mocks";

describe('renders BodyDeviceInfo values', () => {

    /*
    it('renders BodyDeviceInfo emptyValues', () => {
        render(
            <BodyDeviceInfo />
        )
        const business = screen.getByText(/Scotia/i);

        expect(business).toBeInTheDocument();
    })
     */

    it('renders BodyDeviceInfo device1', () => {
        render(
            <BodyDeviceInfo {...device1} />
        )

        const brand = screen.getByText(/Lenovo/i);
        const product = screen.getByText(/Laptop/i);
        const model = screen.getByText(/T14/i);
        const business = screen.getByText(/ScotiaGSG/i);

        expect(brand).toBeInTheDocument();
        expect(product).toBeInTheDocument();
        expect(model).toBeInTheDocument();
        expect(business).toBeInTheDocument();
    })

    it('renders BodyDeviceInfo device2', () => {
        render(
            <BodyDeviceInfo {...device2} />
        )

        const brand = screen.getByText(/Lenovo/i);
        const product = screen.getByText(/Laptop/i);
        const model = screen.getByText(/T14/i);
        const business = screen.getByText(/ScotiaGBS/i);

        expect(brand).toBeInTheDocument();
        expect(product).toBeInTheDocument();
        expect(model).toBeInTheDocument();
        expect(business).toBeInTheDocument();
    })
})

describe('render BodyDevice renders correctly', () => {

    render( <BodyDeviceInfo /> )

    const textBoxes = screen.getAllByRole('textbox');

    const renderCorrectlyTest = textBoxes.map( textBox => textBox.innerHTML )

    expect( JSON.stringify(renderCorrectlyTest.sort()) )
        .toBe( JSON.stringify(renderCorrectly.sort()) )
})

describe('render FormDeviceInfo', () => {

})