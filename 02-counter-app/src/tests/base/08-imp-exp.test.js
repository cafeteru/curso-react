import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import { heroes } from "../../base/data/heroes";

describe("Imp-exp", () => {
  test("debe de retornar un heroe por id", () => {
    const heroe = getHeroeById(1);
    expect(heroe).toEqual(heroes[0]);
  });

  test("no debe de retornar un heroe por el id", () => {
    const heroe = getHeroeById(3);
    expect(heroe).toBeUndefined();
  });

  test("debe de retornar un heroe por owner", () => {
    const heroesByOwner = getHeroesByOwner("Marvel");
    expect(heroesByOwner[0]).toEqual(heroes[1]);
  });

  test("no debe de retornar un heroe por el owner", () => {
    const heroesByOwner = getHeroesByOwner("Marvel2");
    expect(heroesByOwner.length).toBe(0);
  });
});
