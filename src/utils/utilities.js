export const roles = {
    admin: "/dashboard",
    auth: "/dashboard",
    undefined: "/login",
    null: "/login",
}

export const rols = Object.freeze({
    admin: "admin",
    auth: "auth",
    undefined: "undefined",
    null: "null",
})

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

export const inputsFilterDefaultValues = Object.freeze({
    SERIAL: "SERIAL_SELECTION",
    SCOTIAID: "SCOTIAID_SELECTION",
    BUSINESS: "BUSINESS_SELECTION",
    IMAGE: "IMAGE_SELECTION",
    STORAGE: "STORAGE_SELECTION",
    FILTER_KEY: "FILTERKEY_SELECTION",
    INTERN_OPERATION: "INTERN_OPERATION_SELECTION",
})

export const deviceSettingsKeysValues = Object.freeze({
    REGISTER_DEVICE: Symbol("REGISTER DEVICE"),
    EDIT_DEVICE: Symbol("EDIT DEVICE"),
    DELETE_DEVICE: Symbol("DELETE DEVICE")
})

export const pathsDefault = Object.freeze({
    ADMIN: "/dashboard/admin",
    HOME: "/dashboard",
    OPERATION: "/dashboard/internOperation"
})

export const initialStateDeviceInfoSubmit = Object.freeze({
    submitterName: "",
    data: {}
})