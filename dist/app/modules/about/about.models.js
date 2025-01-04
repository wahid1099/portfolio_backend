"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const aboutSchema = new mongoose_1.Schema({
    name: {
        type: String,
        default: "ABDUL WAHID",
    },
    bio: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        default: () => new Date().getFullYear() - 2000,
    },
    designation: {
        type: String,
        default: "Competitive Programmer && Software Engineer",
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});
const About = (0, mongoose_1.model)("About", aboutSchema);
exports.default = About;
