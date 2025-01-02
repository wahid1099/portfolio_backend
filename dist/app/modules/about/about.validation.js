"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutValidationSchema = void 0;
const zod_1 = require("zod");
exports.aboutValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().default("Sheikh Mohammad Nazmul Hasan"),
        bio: zod_1.z.string().nonempty("Bio is required"),
        age: zod_1.z.number().default(() => new Date().getFullYear() - 2003),
        designation: zod_1.z.string().default("Full Stack Developer"),
        description: zod_1.z.string().nonempty("Description is required"),
    }),
});
