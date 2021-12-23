import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("CounterApp", () => {
  const value = 100;
  let wrapper;
  let buttons;

  beforeEach(() => {
    wrapper = shallow(<CounterApp value={value} />);
    buttons = wrapper.find("button");
    expect(buttons.length).toBe(3);
  });

  test("Debe de mostrar el <CounterApp /> correctamente", () => {
    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();
    const counterValue = wrapper.find("h2").text();
    expect(counterValue).toBe("0");
  });

  test("Debe de mostrar el contador", () => {
    const wrapper = shallow(<CounterApp value={value} />);
    const counterValue = wrapper.find("h2").text();
    expect(counterValue).toBe(value + "");
  });

  test("Debe de incrementar el contador", () => {
    buttons.at(0).simulate("click");
    const counterValue = wrapper.find("h2").text();
    expect(counterValue).toBe(`${value + 1}`);
  });

  test("Debe de decrementar el contador", () => {
    buttons.at(1).simulate("click");
    const counterValue = wrapper.find("h2").text();
    expect(counterValue).toBe(`${value - 1}`);
  });

  test("Debe de resetear el contador", () => {
    buttons.at(1).simulate("click");
    buttons.at(1).simulate("click");
    buttons.at(1).simulate("click");
    buttons.at(2).simulate("click");
    const counterValue = wrapper.find("h2").text();
    expect(counterValue).toBe(`${value}`);
  });
});
