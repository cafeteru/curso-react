const personajes = ["Goku", "Vegeta", "Trunks"];
const [goku] = personajes;
console.warn(goku);
const [, vegeta] = personajes;
console.warn(vegeta);
const userState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};
const [p1, setNombre] = userState("Goku");
setNombre();
