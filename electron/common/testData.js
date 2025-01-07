const testData = [
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "",
        serial: "Serial",
        entryDate: "11/1/2022",
        pxeDate: "",
        image: "",
        business: "GSG",
        stockState: "Stock",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "",
        serial: "Serial1",
        entryDate: "11/1/2022",
        pxeDate: "",
        image: "Sin Imagen",
        business: "GBS",
        stockState: "Stock",
    },
]

const testBrand = [
    {
        id: 1,
        brand: "Lenovo",
        products: {
            Laptop: ["T470s", "T480s", "T490s", "T495", "T14 gen 1","T14 gen 2", "T14 gen 3"],
            Desktop: ["M720q", "M920"],
        },
    },
    {
        id: 2,
        brand: "Dell",
        products: {
            Laptop: [],
            Desktop: [],
        },
    },
    {
        id: 3,
        brand: "HP",
        products: {
            Laptop: [],
            Desktop: [],
        },
    }
]

const testProduct = [
    {
        id: 1,
        product: "Laptop",
    },
    {
        id: 2,
        product: "Desktop",
    }
]

const customersOperations = [
    {
        id: 1,
        customerOperation: "Operacion1",
        mnemonic: "op1",
    },
    {
        id: 2,
        customerOperation: "Operacion2",
        mnemonic: "op2",
    },
    {
        id: 3,
        customerOperation: "Operacion3",
        mnemonic: "op3",
    },
    {
        id: 4,
        customerOperation: "Operacion4",
        mnemonic: "op4",
    }
]

const getModelsByBrand = [
    {
        id: 1,
        brand: "Lenovo",
        product: "Laptop",
        model: "T14 g3"
    },
    {
        id: 2,
        brand: "Lenovo",
        product: "Laptop",
        model: "T14 g2"
    },
    {
        id: 3,
        brand: "Lenovo",
        product: "Laptop",
        model: "T14 g1"
    },
    {
        id: 4,
        brand: "Lenovo",
        product: "Laptop",
        model: "T14"
    },
    {
        id: 5,
        brand: "Lenovo",
        product: "Laptop",
        model: "T495"
    },
    {
        id: 6,
        brand: "Lenovo",
        product: "Laptop",
        model: "T490s"
    },
    {
        id: 7,
        brand: "Lenovo",
        product: "Desktop",
        model: "M920"
    },
    {
        id: 8,
        brand: "Lenovo",
        product: "Desktop",
        model: "M710q"
    },
    {
        id: 9,
        brand: "Lenovo",
        product: "Desktop",
        model: "M720q"
    },
    {
        id: 10,
        brand: "Lenovo",
        product: "Desktop",
        model: "M73"
    },
]

const internOperation = [
    {
        id: 1,
        operation: "IT op1",
    },
    {
        id: 2,
        operation: "IT op2"
    }
]

const auths = {
    "dierickbro@gmail.com": {
        email: "dierickbro@gmail.com",
        password: "12345678",
        rol: "admin",
        uid: "uid-1"
    }
}

const stockState = [
    {
        id: 1,
        stockState: "Stock",
    },
    {
        id: 2,
        stockState: "IT Delivery",
    },
    {
        id: 3,
        stockState: "IT Support",
    }
]

module.exports = {
    testData,
    testBrand,
    testProduct,
    customersOperations,
    getModelsByBrand,
    internOperation,
    auths,
}