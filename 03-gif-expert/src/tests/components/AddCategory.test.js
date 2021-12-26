import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("AddCategory", () => {
  const setCategories = () => {};
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola mundo";
    input.simulate("change", { target: { value } });
  });
});
