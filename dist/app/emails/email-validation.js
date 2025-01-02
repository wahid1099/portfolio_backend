"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidationSchema = void 0;
const zod_1 = require("zod");
exports.contactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, { message: "Name is required" })
            .max(50, { message: "Name must be less than 50 characters" }),
        email: zod_1.z.string().email({ message: "Invalid email address" }),
        message: zod_1.z
            .string()
            .min(10, { message: "Message must be at least 10 characters long" })
            .max(500, { message: "Message must be less than 500 characters" }),
    }),
});
