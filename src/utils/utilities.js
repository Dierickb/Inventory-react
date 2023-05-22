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

export const inputsFilterDefaultValues = Object.freeze({
    serial: "",
    scotiaId: "",
    business: "businessSelect",
    image: "imageSelect",
})

export const inputsFilterTextName = Object.freeze({
    SERIAL: "serial",
    SCOTIAID: "scotiaId",
    BUSINESS: "businessSelect",
    IMAGE: "imageSelect"
})

export const deviceSettingsKeysValues = Object.freeze({
    REGISTER_DEVICE: Symbol("REGISTER DEVICE"),
    EDIT_DEVICE: Symbol("EDIT DEVICE"),
    DELETE_DEVICE: Symbol("DELETE DEVICE")
})

export const pathsDefault = Object.freeze({
    SETTING: "/dashboard/admin",
    HOME: "/dashboard"
})

export const initialStateDeviceInfoSubmit = Object.freeze({
    submitterName: "",
    data: {}
})