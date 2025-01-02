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
exports.AuthServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const auth_models_1 = __importDefault(require("./auth.models"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_error_1 = __importDefault(require("../../../errors/app-error"));
const config_1 = __importDefault(require("../../config"));
function loginIntoDb(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield auth_models_1.default.findOne({
            email: payload.email,
        });
        if (!user) {
            throw new app_error_1.default(404, "Email Not Registered!");
        }
        const isCorrectPassword = yield user.comparePassword(payload.password);
        if (!isCorrectPassword) {
            throw new app_error_1.default(401, "Wrong Password");
        }
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            email: user.email,
        }, config_1.default.jwt_secret, {
            expiresIn: "7d",
        });
        return {
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "Admin logged in success",
            data: {
                token,
                user,
            },
        };
    });
}
exports.AuthServices = {
    loginIntoDb,
};
