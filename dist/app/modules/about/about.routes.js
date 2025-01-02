"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutRoutes = void 0;
const express_1 = require("express");
const about_controllers_1 = require("./about.controllers");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const zod_validation_1 = __importDefault(require("../../middlewares/zod-validation"));
const about_validation_1 = require("./about.validation");
const router = (0, express_1.Router)();
router.get("/", about_controllers_1.AboutControllers.getAbout);
router.put("/", (0, auth_1.default)(), (0, zod_validation_1.default)(about_validation_1.aboutValidationSchema), about_controllers_1.AboutControllers.createOrUpdateAbout);
exports.AboutRoutes = router;
