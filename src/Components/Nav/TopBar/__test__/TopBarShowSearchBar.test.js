import {act} from "react-dom/test-utils";
import {render as customRender} from "../SearchByPath/__test__/test-utils";
import TopBar from "../TopBar";
import React from "react";

jest.mock("react-router-dom", () => {
    return {
        ...jest.requireActual("react-router-dom"),
        useLocation: () => ({
            pathname: "/dashboard"
        })
    };
});

it('renders correctly pathname !== pathsDefault.HOME',  async () => {

    const isActive = true
    const setActive = jest.fn()
    let renderer;

    await act(async () => {
        renderer = await customRender(
            <TopBar isActive={isActive} setActive={setActive} />
        )
    })

    const header = renderer.getAllByRole("banner")
    expect(header.length).toBe(2)
})