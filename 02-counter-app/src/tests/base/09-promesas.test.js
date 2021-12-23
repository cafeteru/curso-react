import { getHeroeByIdAsync } from "../../base/09-promesas";
import { heroes } from "../../base/data/heroes";

describe("Promesas", () => {
  // done -> hace que espere a la llamada asincrona
  test("debe de retornar un heroe por id asincronamente", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual(heroes[0]);
      done();
    });
  });

  test("no debe de retornar un heroe por id asincronamente", (done) => {
    const id = 3;
    getHeroeByIdAsync(id)
      .then(() => {
        throw new Error("Err");
      })
      .catch((result) => {
        expect(result).toEqual("No se pudo encontrar el héroe");
        done();
      });
  });
});
