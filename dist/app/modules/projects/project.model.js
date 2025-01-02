"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], required: true },
    live_preview: { type: String, required: true },
    source: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
// Mongoose Model
const Project = (0, mongoose_1.model)("Project", ProjectSchema);
exports.default = Project;
