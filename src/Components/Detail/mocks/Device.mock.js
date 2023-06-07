export const device1 = {
    brand: "Lenovo",
    product: "Laptop",
    model: "T14",
    internOperation: "",
    serial: "Serial1",
    entryDate: "11/1/2022",
    pxeDate: "",
    image: "",
    business: "GSG",
}

export const device2 = {
    brand: "Lenovo",
    product: "Laptop",
    model: "T14",
    internOperation: "IT Support",
    serial: "Serial2",
    entryDate: "12/1/2022",
    pxeDate: "11/7/2022",
    image: "ScotiaTech",
    business: "GBS",
}

export const date = {
    dateNow: new Date().toLocaleDateString('en-GB'),
    dateNowMinus5: new Date(new Date().setDate(new Date().getDate() - 5)).toLocaleDateString('en-GB'),
    dateNowMinus14: new Date(new Date().setDate(new Date().getDate() - 14)).toLocaleDateString('en-GB'),
    dateNowMinus3: new Date(new Date().setDate(new Date().getDate() - 3)).toLocaleDateString('en-GB'),
    dateNowMinus6: new Date(new Date().setDate(new Date().getDate() - 6)).toLocaleDateString('en-GB'),
    dateNull: null,
    dateUndefined: undefined,
}

export const dateResult = {
    dateNow: "#088993FF",
    dateNowMinus5: "#088993FF",
    dateNowMinus14: "#621717",
    dateNowMinus3: "#088993FF",
    dateNowMinus6: "#CCBC3A",
    dateNull: "#a1a1a1",
    dateUndefined: "#a1a1a1",
}