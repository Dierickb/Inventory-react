export const roles = {
    admin: "/dashboard",
    auth: "/dashboard",
    undefined: "/login",
    null: "/login",
}

export const eventButtonDeviceInfo = {
    event_update: true,
    event_send: true,
    null: false,
    undefined: false,
}

export const inputType = Object.freeze({
    SELECT: "select",
    INPUT: "input",
})

export const keyInput = Object.freeze({
    ENTER: "Enter",
})

export const inputsFilter = Object.freeze({
    SERIAL: Symbol(),
    SCOTIAID: Symbol(),
    BUSINESSES: Symbol(),
    IMAGE: Symbol()
})

export const inputsFilterText = Object.freeze({
    SERIAL: "serial",
    SCOTIAID: "scotiaId",
    BUSINESS: "businessSelect",
    IMAGE: "imageSelect"
})
