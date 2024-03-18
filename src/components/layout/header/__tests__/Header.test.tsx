import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../Header";

test("renders header", () => {
  render(<Header />);
  const element = screen.getByTestId("Header");
  expect(element).toHaveClass("Header");
});
