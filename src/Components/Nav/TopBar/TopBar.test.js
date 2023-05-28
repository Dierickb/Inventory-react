import React from "react";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import TopBar from "./TopBar"

test('renders content', () => {

    const topBar = {
        content: 'This is a test',
        important: true
    }
    const component = render(<TopBar />)

    console.log(component)

})