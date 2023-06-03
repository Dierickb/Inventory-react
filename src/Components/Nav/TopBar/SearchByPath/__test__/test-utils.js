import React from 'react'
import {render} from '@testing-library/react'
import {BootCenterDevicesProvider} from "../../../../../contexts/BootCenterDevices";
import {Filters} from "../../../../../contexts/Filters";
import {OperationsProvider} from "../../../../../contexts/Operations";

const AllTheProviders = ({children}) => {
    return (
        <OperationsProvider>
            <BootCenterDevicesProvider>
                <Filters>
                    {children}
                </Filters>
            </BootCenterDevicesProvider>
        </OperationsProvider>
    )
}

const customRender = (ui, options) =>
    render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}