const value = 1234567.89;
const country = "pt-BR";
const currency = "BRL";

const ptBR = new Intl.NumberFormat(country, {
  style: "currency",
  currency: currency,
}).format(value);

console.log(ptBR);
