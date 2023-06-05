import TopBar from '../TopBar'
import {fireEvent, render ,screen} from "@testing-library/react";
import {render as customRender} from "../SearchByPath/__test__/test-utils";
import {act} from "react-dom/test-utils";
import React from "react";

jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
        useLocation: () => ({
            pathname: "/admin"
        })
    };
});

describe('TopBar render Correctly', () => {

    it('renders correctly with false state value',  async () => {
        const isActive = false
        const setActive = jest.fn()

        const {getByRole} = render(
            <TopBar isActive={isActive} setActive={setActive} />
        )

        const stateElement = getByRole("search")
        const button = screen.getByRole('button')
        const img = screen.getByRole('img')

        expect(stateElement.className).toBe("topBar")
        expect(button).toBeInTheDocument()
        expect(img).toBeInTheDocument()
    })

    it('renders correctly with true state value',  async () => {
        const isActive = true
        const setActive = jest.fn()

        const {getByRole} = render(
            <TopBar isActive={isActive} setActive={setActive} />
        )

        const stateElement = getByRole("search")
        const button = screen.getByRole('button')
        const img = screen.getByRole('img')

        expect(stateElement.className).toBe("topBar active")
        expect(button).toBeInTheDocument()
        expect(img).toBeInTheDocument()

    })

    it('renders correctly pathname === pathsDefault.HOME',  async () => {
        const isActive = true
        const setActive = jest.fn()
        let renderer;

        await act(async () => {
            renderer = await customRender(
                <TopBar isActive={isActive} setActive={setActive} />
            )
        })

        const header = renderer.getAllByRole("banner")
        expect(header.length).toBe(1)
    })
})

describe('TopBar state handle Correctly', () => {
    it('handle useState',  async () => {
        const isActive = true
        const setActive = jest.fn()

        const {getByRole} = render(
            <TopBar isActive={isActive} setActive={setActive} />
        )

        const stateElement = getByRole("button")

        expect(stateElement).toBeInTheDocument()

        fireEvent.click(stateElement)
        expect(setActive).toHaveBeenCalledTimes(1)
    })
})
