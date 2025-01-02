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
exports.AboutServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const app_error_1 = __importDefault(require("../../../errors/app-error"));
const about_models_1 = __importDefault(require("./about.models"));
function getAboutFromDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield about_models_1.default.findOne();
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "About successfully retrieved",
            data: result,
        };
    });
}
function createOrUpdateAboutIntoDb(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        // Check if an About document exists
        const existingAbout = yield about_models_1.default.findOne();
        let result;
        if (existingAbout) {
            // Update the existing document
            result = yield about_models_1.default.findByIdAndUpdate(existingAbout._id, payload, {
                new: true,
            });
        }
        else {
            // Create a new document
            result = yield about_models_1.default.create(payload);
        }
        if (!result) {
            throw new app_error_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "Failed to save About data");
        }
        return {
            success: true,
            message: "Operation successful",
            status: http_status_codes_1.StatusCodes.OK,
            data: result,
        };
    });
}
exports.AboutServices = {
    createOrUpdateAboutIntoDb,
    getAboutFromDb,
};
