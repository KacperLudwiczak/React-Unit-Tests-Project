import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello as a text", () => {
  // 1. Arrange
  render(<Greeting />);

  // 2. Act
  // ... nothing

  // 3. Assert
  const helloElement = screen.getByText("Hello", { exact: true });
  expect(helloElement).toBeInTheDocument();
});
