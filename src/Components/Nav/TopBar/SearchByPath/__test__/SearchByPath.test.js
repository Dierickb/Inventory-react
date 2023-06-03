import React from "react";
import "@testing-library/jest-dom"
import {render} from "./test-utils"
import { act } from 'react-dom/test-utils';
import SearchByPath from "../SearchByPath";

describe('SearchByPath render Correctly', () => {
    let renderer;
    beforeEach(() =>
        act(async () => {
            renderer = await render(<SearchByPath />)
        })
    )
    it('renders correctly',  async () => {
        expect(renderer.getByRole('heading', {
            name: "Serial"
        })).toBeInTheDocument()

        expect(renderer.getByRole('heading', {
            name: "Imagen"
        })).toBeInTheDocument()

        expect(renderer.getByRole('heading', {
            name: "Empresa"
        })).toBeInTheDocument()

        expect(renderer.getByRole('textbox', {
            placeholder: 'Serial'
        })).toBeInTheDocument()

        expect(renderer.getAllByRole('combobox').length).toBe(2)

    })
})