const today = new Date();

console.log(new Intl.DateTimeFormat("pt-BR").format(today));

console.log(
  new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(today)
);

console.log(
  new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today)
);
