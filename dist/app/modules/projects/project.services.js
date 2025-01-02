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
exports.ProjectServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const app_error_1 = __importDefault(require("../../../errors/app-error"));
const project_model_1 = __importDefault(require("./project.model"));
const mongoose_1 = require("mongoose");
function retrieveAllProjectsFromDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield project_model_1.default.find().sort({ createdAt: -1 });
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Project successfully retrieved",
            data: result,
        };
    });
}
function retrieveSingleProjectFromDb(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new app_error_1.default(400, "Invalid project id format");
        const result = yield project_model_1.default.findById(_id);
        if (!result)
            throw new app_error_1.default(404, "Project not found with that id");
        return {
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "Project successfully retrieved",
            data: result,
        };
    });
}
function createNewProjectIntoDb(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield project_model_1.default.create(payload);
        if (!result)
            throw new app_error_1.default(400, "Bad Request");
        return {
            success: true,
            status: http_status_codes_1.StatusCodes.CREATED,
            message: "New Project successfully published",
            data: result,
        };
    });
}
function updateProjectIntoDb(_id, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new app_error_1.default(400, "Invalid projectId format");
        const result = yield project_model_1.default.findByIdAndUpdate(_id, payload, { new: true });
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Project successfully updated",
            data: result,
        };
    });
}
function deleteProjectFromDb(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new app_error_1.default(400, "Invalid projectId format");
        const isExist = yield project_model_1.default.findById(_id).lean();
        if (!isExist)
            throw new app_error_1.default(404, "Project not found with that id");
        const result = yield project_model_1.default.findByIdAndDelete(_id);
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Project successfully deleted",
            data: result,
        };
    });
}
exports.ProjectServices = {
    createNewProjectIntoDb,
    updateProjectIntoDb,
    deleteProjectFromDb,
    retrieveSingleProjectFromDb,
    retrieveAllProjectsFromDb,
};
