import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Funciones", () => {
  test("getUser debe de retorno un objeto", () => {
    const expected = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(expected).toEqual(user);
  });

  test("getUsuarioActivo debe de retorno un objeto", () => {
    const nombre = "Iván";
    const expected = {
      uid: "ABC567",
      username: nombre,
    };
    const user = getUsuarioActivo(nombre);
    expect(expected).toEqual(user);
  });
});
