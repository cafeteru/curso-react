import { getImagen } from "../../base/11-async-await";

describe("Asyns-awair.fetch", () => {
  test("debe de retornar la url de imagen", async () => {
    const url = await getImagen().then();
    expect(typeof url).toBe("string");
    expect(url).not.toBe("No existe");
  });
});
