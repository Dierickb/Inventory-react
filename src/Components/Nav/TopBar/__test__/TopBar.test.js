import React, {useState} from "react";
import TopBar from '../TopBar'
import {render, renderHook, screen} from "@testing-library/react";
import user from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: () => ({
        pathname: "localhost:3000/dashboard"
    })
}));

describe('TopBar render Correctly', () => {

    it('renders correctly',  async () => {
        const setActive = () => true
        render(<TopBar isActive={false} setActive={setActive} />)

        const button = screen.getByRole('button')
        const img = screen.getByRole('img')

        expect(button).toBeInTheDocument()
        expect(img).toBeInTheDocument()

    })
})