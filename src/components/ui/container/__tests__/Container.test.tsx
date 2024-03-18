import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "../Container";

test("renders container", () => {
  render(<Container />);
  const element = screen.getByTestId("Container");
  expect(element).toHaveClass("Container");
});
