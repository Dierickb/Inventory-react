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

const ValidationError = createErrorFactory("ValidationError")
const MessageValidation = createErrorFactory("MessageValidation")

const ConnectionError = createInternErrorFactory("ConnectionError")

module.exports = {
    ValidationError,
    MessageValidation,
    ConnectionError,
}