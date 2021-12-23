import PrimeraApp from "../PrimeraApp";
import { shallow } from "enzyme";

describe("PrimeraApp", () => {
  const saludo = "Hola mundo";

  test("Debe de mostrar el <PrimeraApp /> correctamente", () => {
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);
    expect(wrapper).toMatchSnapshot(); //
  });

  test("Debe de mostrar el subtitulo", () => {
    const subtitulo = "Soy Iván";
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    );
    const textParrafo = wrapper.find("p").text();
    expect(textParrafo).toBe(subtitulo);
  });
});
