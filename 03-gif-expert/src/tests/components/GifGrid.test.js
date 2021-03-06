import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/UseFetchGifs";

jest.mock("../../hooks/UseFetchGifs"); // crea el mock

describe("GifGrid", () => {
  const category = "Bleach";

  test("Debe de crearse", () => {
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
        id: "id",
        url: "http://localhost",
        title: "title",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBeFalsy();
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
