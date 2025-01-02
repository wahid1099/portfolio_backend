"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_validation_1 = require("./auth.validation");
const zod_validation_1 = __importDefault(require("../../middlewares/zod-validation"));
const auth_controllers_1 = require("./auth.controllers");
const router = (0, express_1.Router)();
router.post("/login", (0, zod_validation_1.default)(auth_validation_1.AuthValidations.loginValidationSchema), auth_controllers_1.AuthControllers.login);
exports.AuthRoutes = router;
