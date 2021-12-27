import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("AddCategory", () => {
  const setCategories = jest.fn(); // crea un mock
  const value = "Hola mundo";
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
  });

  test("No debe de postear la información con submit", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar al setCategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop("value")).not.toBe(value);
    expect(input.prop("value")).toBe("");
  });
});
