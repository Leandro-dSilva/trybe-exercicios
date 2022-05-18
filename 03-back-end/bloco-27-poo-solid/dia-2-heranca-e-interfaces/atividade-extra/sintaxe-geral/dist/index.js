"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
const Mamal_1 = __importDefault(require("./Mamal"));
const Bird_1 = __importDefault(require("./Bird"));
exports.default = { Animal: Animal_1.default, Mamal: Mamal_1.default, Bird: Bird_1.default };
