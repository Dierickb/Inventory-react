const createErrorFactory = function (name) {
    return class BusinessError extends Error {
        constructor (message) {
            super(message)
            this.name = name
            this.stack = ""
        }
    }
}

const createInternErrorFactory = function (name) {
    return class BusinessError extends Error {
        constructor (message) {
            super(message)
            this.name = name
        }
    }
}

export const ValidationError = createErrorFactory("ValidationError")
export const MessageValidation = createErrorFactory("MessageValidation")

export const ConnectionError = createInternErrorFactory("ConnectionError")