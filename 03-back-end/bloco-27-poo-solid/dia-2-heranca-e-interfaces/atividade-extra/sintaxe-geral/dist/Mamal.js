"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Mammal extends Animal_1.default {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}
exports.default = Mammal;
const tiger = new Mammal('Tigre', new Date(Date.parse('May 03, 2020')));
const main = (animal) => {
    console.log(animal.age);
};
main(tiger);
tiger.walk();
