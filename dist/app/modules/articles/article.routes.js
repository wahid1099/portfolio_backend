"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const article_controllers_1 = require("./article.controllers");
const zod_validation_1 = __importDefault(require("../../middlewares/zod-validation"));
const article_validations_1 = require("./article.validations");
const router = (0, express_1.Router)();
router.get("/", article_controllers_1.ArticleControllers.retrieveAllArticles);
router.get("/:_id", article_controllers_1.ArticleControllers.retrieveSingleArticle);
router.post("/", (0, auth_1.default)(), (0, zod_validation_1.default)(article_validations_1.ArticleValidations.createArticleValidationSchema), article_controllers_1.ArticleControllers.createNewArticle);
router.patch("/:_id", (0, auth_1.default)(), (0, zod_validation_1.default)(article_validations_1.ArticleValidations.updateArticleValidationSchema), article_controllers_1.ArticleControllers.updateArticle);
router.delete("/:_id", (0, auth_1.default)(), article_controllers_1.ArticleControllers.deleteArticle);
exports.articleRoutes = router;
