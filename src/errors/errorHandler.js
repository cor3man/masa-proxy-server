const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    console.error(err.stack);

    res.status(statusCode).json({
        error: {
            message: message,
            statusCode: statusCode
        }
    });
};

module.exports = errorHandler;