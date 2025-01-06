"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const catch_async_1 = __importDefault(require("../../utils/catch-async"));
const transporter_1 = __importDefault(require("./transporter"));
const http_status_codes_1 = require("http-status-codes");
const contact_notification_template_1 = __importDefault(require("./contact-notification-template"));
exports.sendContactEmail = (0, catch_async_1.default)(function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sendMail = yield transporter_1.default.sendMail({
            subject: `New Contact Form Submission by ${req.body.name}`,
            to: "eng.wahid917@gmail.com",
            replyTo: req.body.email,
            html: (0, contact_notification_template_1.default)(req.body),
        });
        if (!sendMail.accepted.length) {
            res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                status: http_status_codes_1.StatusCodes.BAD_REQUEST,
                success: false,
                message: "Failed to send Email",
                data: null,
            });
        }
        res.status(http_status_codes_1.StatusCodes.OK).json({
            status: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "Message send",
            data: req.body,
        });
    });
});
