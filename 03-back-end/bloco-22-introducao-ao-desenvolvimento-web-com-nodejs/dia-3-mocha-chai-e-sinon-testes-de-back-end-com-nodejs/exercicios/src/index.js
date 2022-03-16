function testaNumero(num) {
  if (typeof num !== "number") return false;
  if (num > 0) return "positivo";
  if (num < 0) return "negativo";
  return "neutro";
}

module.exports = testaNumero;
