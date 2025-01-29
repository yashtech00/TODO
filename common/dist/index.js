"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedInput = exports.createdInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    name: zod_1.default.string().min(4).max(100),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6).max(100),
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6).max(100),
});
exports.createdInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    status: zod_1.default.string(),
});
exports.updatedInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    status: zod_1.default.string(),
});
