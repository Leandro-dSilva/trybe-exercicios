"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Bird extends Animal_1.default {
    showBirthDate() {
        console.log(this.birthDate);
        // protected birthDate: classe filha Bird possui acesso
    }
}
exports.default = Bird;
const parrot = new Bird('Papagaio', new Date(Date.parse('Jun 07, 2017')));
console.log(parrot.age);
// console.log(parrot.birthDate); => protected: não possui acesso externo
