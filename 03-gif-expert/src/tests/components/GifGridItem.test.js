import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("GifGridItem", () => {
  const title = "Titulo";
  const url = "http://localhost:8080/img.jpeg";
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el título", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(title);
  });

  test("Debe de tener una imagen con alt", () => {
    const img = wrapper.find("img");
    // prop -> para obtener los atributos de la etiqueta
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener la clase card", () => {
    const div = wrapper.find("div");
    // props -> devuelve un objeto con todos los atributos de la etiqueta
    expect(div.props().className).toContain("card");
  });
});
