"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Bird extends Animal_1.default {
    fly() {
        console.log(`${this.name} está voando!`);
    }
}
exports.default = Bird;
const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
parrot.fly();
