"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    tags: { type: [String], required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const Article = (0, mongoose_1.model)("Article", ArticleSchema);
exports.default = Article;
