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
exports.AboutControllers = void 0;
const catch_async_1 = __importDefault(require("../../../utils/catch-async"));
const about_services_1 = require("./about.services");
const getAbout = (0, catch_async_1.default)(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield about_services_1.AboutServices.getAboutFromDb();
        res.status(result.status).json(result);
    });
});
const createOrUpdateAbout = (0, catch_async_1.default)(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield about_services_1.AboutServices.createOrUpdateAboutIntoDb(req.body);
        res.status(result.status).json(result);
    });
});
exports.AboutControllers = {
    createOrUpdateAbout,
    getAbout,
};
