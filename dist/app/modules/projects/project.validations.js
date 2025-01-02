"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectValidations = exports.updateProjectValidationSchema = exports.createProjectValidationSchema = void 0;
const zod_1 = require("zod");
exports.createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        description: zod_1.z.string().min(1, "Description is required"),
        image: zod_1.z.string().url("Image must be a valid URL"),
        technologies: zod_1.z.array(zod_1.z.string().min(1, "Technology name is required")),
        live_preview: zod_1.z.string().url("Live preview must be a valid URL"),
        source: zod_1.z.string().url("Source must be a valid URL"),
    }),
});
exports.updateProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required").optional(),
        description: zod_1.z.string().min(1, "Description is required").optional(),
        image: zod_1.z.string().url("Image must be a valid URL").optional(),
        technologies: zod_1.z
            .array(zod_1.z.string().min(1, "Technology name is required"))
            .optional(),
        live_preview: zod_1.z.string().url("Live preview must be a valid URL").optional(),
        source: zod_1.z.string().url("Source must be a valid URL").optional(),
    }),
});
exports.ProjectValidations = {
    createProjectValidationSchema: exports.createProjectValidationSchema,
    updateProjectValidationSchema: exports.updateProjectValidationSchema,
};
