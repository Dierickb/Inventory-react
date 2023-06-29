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
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial1",
        entryDate: "12/1/2022",
        pxeDate: "11/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T495",
        internOperation: "",
        serial: "Serial2",
        entryDate: "12/1/2022",
        pxeDate: "",
        image: "",
        business: "GSG",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial3",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "",
        serial: "Serial4",
        entryDate: "12/1/2022",
        pxeDate: "",
        image: "",
        business: "GSG",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T490",
        internOperation: "IT Delivery",
        serial: "Serial5",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T490",
        internOperation: "IT Delivery",
        serial: "Serial6",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "Finance",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T490",
        internOperation: "IT Delivery",
        serial: "Serial7",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "Finance",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T490",
        internOperation: "IT Support",
        serial: "Serial8",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial9",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial10",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial11",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial12",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial13",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial14",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GBS",
    },
    {
        brand: "Lenovo",
        product: "Laptop",
        model: "T14",
        internOperation: "IT Support",
        serial: "Serial15",
        entryDate: "12/1/2022",
        pxeDate: "12/7/2022",
        image: "ScotiaTech",
        business: "GSG",
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
        customerOperation: "ScotiaTech",
        mnemonic: "CITST",
    },
    {
        id: 2,
        customerOperation: "Finance",
        mnemonic: "COF",
    },
    {
        id: 3,
        customerOperation: "AP Mexico",
        mnemonic: "COF",
    },
    {
        id: 4,
        customerOperation: "Administrativo",
        mnemonic: "CAD",
    }, {
        id: 5,
        customerOperation: "Caribe",
        mnemonic: "CBN",
    }, {
        id: 6,
        customerOperation: "Mexico",
        mnemonic: "MEXCC",
    },
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
        operation: "IT Delivery",
    },
    {
        id: 2,
        operation: "IT SUPPORT"
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

module.exports = {
    testData,
    testBrand,
    testProduct,
    customersOperations,
    getModelsByBrand,
    internOperation,
    auths,
}