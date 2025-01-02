"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const project_controllers_1 = require("./project.controllers");
const zod_validation_1 = __importDefault(require("../../middlewares/zod-validation"));
const project_validations_1 = require("./project.validations");
const router = (0, express_1.Router)();
router.get("/", project_controllers_1.ProjectControllers.retrieveAllProjects);
router.get("/:_id", project_controllers_1.ProjectControllers.retrieveSingleProject);
router.post("/", (0, auth_1.default)(), (0, zod_validation_1.default)(project_validations_1.ProjectValidations.createProjectValidationSchema), project_controllers_1.ProjectControllers.createNewProject);
router.patch("/:_id", (0, auth_1.default)(), (0, zod_validation_1.default)(project_validations_1.ProjectValidations.updateProjectValidationSchema), project_controllers_1.ProjectControllers.updateProject);
router.delete("/:_id", (0, auth_1.default)(), project_controllers_1.ProjectControllers.deleteProject);
exports.ProjectRoutes = router;
