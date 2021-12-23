const personajes = ["Goku", "Vegeta", "Trunks"];

export const retornaArreglo = () => {
  return ["ABC", 123];
};

const usState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
