import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroeById = getHeroeById(id);
      if (heroeById) {
        resolve(heroeById);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 500);
  });
};
