import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/UseFetchGifs";

jest.mock("../../hooks/UseFetchGifs"); // crea el mock

describe("GifGrid", () => {
  const category = "Bleach";
  test("Debe de mostrar crearse", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar items cuando se cargan imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "abs",
        url: "http://localhost",
        title: "title",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("p").exists()).toBeFalsy();
  });
});
