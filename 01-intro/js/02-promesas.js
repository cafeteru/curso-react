const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroeByIdAsync = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`Heroe con id  ${id} no encontrado`);
      }
    }, 2_000);
  });

getHeroeByIdAsync(1)
  .then((res) => console.log("then de la promesa", res))
  .catch((error) => console.warn("error de la promesa", error))
  .finally(() => console.log("finally de la promesa"));
