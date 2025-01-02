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
exports.ArticleServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const app_error_1 = __importDefault(require("../../../errors/app-error"));
const article_model_1 = __importDefault(require("./article.model"));
const check_valid_objectId_1 = __importDefault(require("../../../utils/check-valid-objectId"));
const mongoose_1 = require("mongoose");
function retrieveAllArticlesFromDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield article_model_1.default.find().sort({ createdAt: -1 });
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Articles successfully retrieved",
            data: result,
        };
    });
}
function retrieveSingleArticleFromDb(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new app_error_1.default(400, "Invalid project id format");
        const result = yield article_model_1.default.findById(_id);
        if (!result)
            throw new app_error_1.default(404, "Article not found with that id");
        return {
            success: true,
            status: http_status_codes_1.StatusCodes.OK,
            message: "Article successfully retrieved",
            data: result,
        };
    });
}
function createNewArticleIntoDb(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield article_model_1.default.create(payload);
        if (!result)
            throw new app_error_1.default(400, "Bad Request");
        return {
            success: true,
            status: http_status_codes_1.StatusCodes.CREATED,
            message: "New article successfully published",
            data: result,
        };
    });
}
function updateArticleIntoDb(_id, payload) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, check_valid_objectId_1.default)(_id))
            throw new app_error_1.default(400, "Invalid articleId format");
        const result = yield article_model_1.default.findByIdAndUpdate(_id, payload, { new: true });
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Article successfully updated",
            data: result,
        };
    });
}
function deleteArticleFromDb(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new app_error_1.default(400, "Invalid articleId format");
        const isExist = yield article_model_1.default.findById(_id).lean();
        if (!isExist)
            throw new app_error_1.default(404, "Article not found with that id");
        const result = yield article_model_1.default.findByIdAndDelete(_id);
        return {
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Article successfully deleted",
            data: result,
        };
    });
}
exports.ArticleServices = {
    createNewArticleIntoDb,
    updateArticleIntoDb,
    deleteArticleFromDb,
    retrieveAllArticlesFromDb,
    retrieveSingleArticleFromDb,
};
