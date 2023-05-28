import React from "react";
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import { act } from 'react-dom/test-utils';
import SearchByPath from "./SearchByPath";
import {BootCenterDevicesProvider} from "../../../../contexts/BootCenterDevices";
import {OperationsProvider} from "../../../../contexts/Operations";
import {Filters} from "../../../../contexts/Filters";

test('renders content',async () => {
    await act(async () => {
        const component = render(
            <OperationsProvider>
                <BootCenterDevicesProvider>
                    <Filters>
                        <SearchByPath />
                    </Filters>
                </BootCenterDevicesProvider>
            </OperationsProvider>
        )
        component.getAllByText("Imagen")
        console.log()
    })

})