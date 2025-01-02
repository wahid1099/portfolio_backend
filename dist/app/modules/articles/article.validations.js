"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleValidations = void 0;
const zod_1 = require("zod");
const createArticleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        image: zod_1.z.string().url("Image must be a valid URL"),
        tags: zod_1.z.array(zod_1.z.string().min(1, "Tag cannot be empty")),
        description: zod_1.z.string().min(1, "Description is required"),
    }),
});
const updateArticleValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required").optional(),
        image: zod_1.z.string().url("Image must be a valid URL").optional(),
        tags: zod_1.z.array(zod_1.z.string().min(1, "Tag cannot be empty")).optional(),
        description: zod_1.z.string().min(1, "Description is required").optional(),
    }),
});
exports.ArticleValidations = {
    createArticleValidationSchema,
    updateArticleValidationSchema,
};
