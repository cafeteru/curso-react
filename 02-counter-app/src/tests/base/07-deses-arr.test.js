import { retornaArreglo } from "../../base/07-deses-arr";

describe("Dess-arr", () => {
  test("debe de retornar un string y un número", () => {
    const [letras, numero] = retornaArreglo();
    expect(letras).toEqual("ABC");
    expect(typeof letras).toEqual("string");
    expect(numero).toEqual(123);
    expect(typeof numero).toEqual("number");
  });
});
