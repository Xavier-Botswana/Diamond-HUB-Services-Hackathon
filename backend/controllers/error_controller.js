// const AppError = require('../utils/appError');

const send_error_dev = (err, res) => {
    const {data} = err.response;

    res.status(data.code).json({
        status: err.status,
        error: data,
        message: data.message
    });
};

// const send_error_prod = (err, res) => {
//   // Operational, trusted error: send message to client
//   // if (err.isOperational) {
//     res.status(err.statusCode).json({
//       status: err.status,
//       error: err,
//       message: err.message,
//       stack: err.stack,
//     });
//   // }
// };

module.exports = (err, req, res, next) => {
    console.log(err.stack);

    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    send_error_dev(err, res);
    // send_error_prod(err, res);
};
