"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_status_codes_1 = require("http-status-codes");
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const global_error_handler_1 = __importDefault(require("./middlewares/global-error-handler"));
const about_routes_1 = require("./modules/about/about.routes");
const auth_routes_1 = require("./modules/auth/auth.routes");
const project_routes_1 = require("./modules/projects/project.routes");
const article_routes_1 = require("./modules/articles/article.routes");
const emails_1 = require("./emails");
const zod_validation_1 = __importDefault(require("./middlewares/zod-validation"));
const email_validation_1 = require("./emails/email-validation");
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://portfolio-backend-theta-ebon.vercel.app",
        "http://localhost:3000",
        "https://wahid-dashboard.netlify.app",
        ""
    ],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// test route
app.get("/", (_, res) => {
    res.send("Hello World!");
});
// application routes
app.use("/api/auth", auth_routes_1.AuthRoutes);
app.use("/api/about", about_routes_1.AboutRoutes);
app.use("/api/projects", project_routes_1.ProjectRoutes);
app.use("/api/articles", article_routes_1.articleRoutes);
app.post("/api/send-email", (0, zod_validation_1.default)(email_validation_1.contactValidationSchema), emails_1.sendContactEmail);
// error handler
app.use(global_error_handler_1.default);
// not found route
app.use((_, res) => {
    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        success: false,
        status: http_status_codes_1.StatusCodes.NOT_FOUND,
        message: "Endpoint not found",
    });
});
let server;
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Connecting to database...");
        try {
            yield mongoose_1.default.connect(config_1.default.db_connection_string);
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            server = app.listen(config_1.default.port || 5000, () => {
                console.log(`STN Portfolio app listening on port ${config_1.default.port || 5000}`);
            });
        }
        catch (error) {
            console.log("There was a problem starting the server.", error);
        }
    });
})();
// async error handle
process.on("unhandledRejection", () => {
    console.log("UnhandledRejection is detected! shutting down the server...");
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});
// synchronies error handle
process.on("uncaughtException", () => {
    console.log("UncaughtException is detected! shutting down the server...");
    process.exit();
});
