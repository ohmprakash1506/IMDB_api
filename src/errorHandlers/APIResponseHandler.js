export const returnSuccuss = (statusCode, message, data) => {
    const response = {
        statusCode,
        response : {
            status: true,
            message,
            data
        }
    }
    return response
}
export const returnError = (statusCode, message) => {
    const response = {
        statusCode,
        response : {
            status: false,
            message
        }
    }
    return response
}