import { getSaludo } from "../../base/02-template-string";

describe("Template string", () => {
  test("getSaludo debe retornar hola + nombre", () => {
    let nombre = "Iván";
    let mensaje = getSaludo(nombre);
    expect(mensaje).toEqual(`Hola ${nombre}`);
  });

  test("getSaludo debe retornar hola anonimo si no hay argumento", () => {
    let mensaje = getSaludo();
    expect(mensaje).toEqual(`Hola anonimo`);
  });
});
