"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    get age() {
        const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
}
exports.default = Animal;
