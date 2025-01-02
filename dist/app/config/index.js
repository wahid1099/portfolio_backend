"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
exports.default = {
    port: process.env.PORT,
    db_connection_string: process.env.DB_CONNECTION_STRING,
    jwt_secret: process.env.JWT_SECRET,
    email_sender_address: process.env.EMAIL_SENDER_ADDRESS,
    email_sender_app_password: process.env.EMAIL_SENDER_APP_PASSWORD,
};
