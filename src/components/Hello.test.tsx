import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hello from "./Hello";

describe("Hello component", () => {
  it("renders with a name", () => {
    render(<Hello name="Bishal" />);
    expect(screen.getByText("Hello, Bishal!")).toBeInTheDocument();
  });
});
