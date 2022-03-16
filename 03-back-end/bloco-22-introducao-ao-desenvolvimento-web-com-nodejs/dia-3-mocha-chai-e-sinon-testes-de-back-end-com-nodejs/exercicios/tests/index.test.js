const { expect } = require("chai");

const testaNumero = require("../src");

describe("1) Chama a função testaNumero", () => {
  describe("Quando o número for maior que 0", () => {
    describe("A resposta", () => {
      it("é uma string", () => {
        expect(testaNumero(10)).to.be.a("string");
      });

      it("retorna positivo", () => {
        expect(testaNumero(10)).to.be.equals("positivo");
      });
    });
  });

  describe("Quando o número passado for menor que 0", () => {
    describe("A resposta", () => {
      it("é uma string", () => {
        expect(testaNumero(-10)).to.be.a("string");
      });

      it("retorna negativo", () => {
        expect(testaNumero(-10)).to.be.equals("negativo");
      });
    });
  });

  describe("Quando o número passado for igual que 0", () => {
    describe("A resposta", () => {
      it("é uma string", () => {
        expect(testaNumero(0)).to.be.a("string");
      });

      it("retorna neutro", () => {
        expect(testaNumero(0)).to.be.equals("neutro");
      });
    });
  });

  describe("Quando o parâmetro não e um número", () => {
    describe("A resposta", () => {
      it("é uma string", () => {
        expect(testaNumero("notNumber")).to.be.a("string");
      });

      it("o valor deve ser um número", () => {
        expect(testaNumero("notNumber")).to.be.equals(
          "o valor deve ser um número"
        );
      });
    });
  });
});
