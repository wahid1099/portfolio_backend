"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function globalErrorHandler(error, _req, res, _next) {
    console.log(error);
    res.status(error.status || 500).json({
        success: false,
        status: error.status || 500,
        message: error.message || "Something went wrong",
        error,
    });
}
exports.default = globalErrorHandler;
