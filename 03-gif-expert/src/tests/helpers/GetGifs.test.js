import { getGifs } from "../../helpers/GetGifs";

describe("GetGifs", () => {
  test("Debe devolver 10 elementos", async () => {
    const gifs = await getGifs("Bleach");
    expect(gifs.length).toBe(10);
  });
});
