describe("Demo.test.js", () => {
  test("deben de ser iguales los string", () => {
    const mensaje = "Hola mundo";
    const mensaje2 = `Hola mundo`;
    expect(mensaje).toEqual(mensaje2);
  });
});
