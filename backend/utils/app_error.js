class app_error extends Error {
    constructor(message, status_code) {
        super(message);
        this.response = {};
        this.response.data = {
            message,
            code: status_code,
        }
        this.status_code = status_code;
        this.status = `${status_code}`.startsWith("4") ? "fail" : "error";

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = app_error;
