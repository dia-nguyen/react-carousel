import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  render(<Card caption="test caption" src="..." currNum={1} totalNum={3} />);
});

it("it matches snapshot", function () {
  const { container } = render(
    <Card caption="test caption" src="..." currNum={1} totalNum={3} />
  );

  expect(container).toMatchSnapshot();
});
