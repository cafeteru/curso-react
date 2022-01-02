import { useFetchGifs } from "../../hooks/UseFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("UseFetchGifs", () => {
  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Bleach")
    );
    const { gifs, loading } = result.current;
    await waitForNextUpdate();

    expect(gifs).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Debe de retornar un listado de img y loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Bleach")
    );
    await waitForNextUpdate();
    const { gifs, loading } = result.current;

    expect(gifs).not.toEqual([]);
    expect(loading).toBeFalsy();
  });
});
