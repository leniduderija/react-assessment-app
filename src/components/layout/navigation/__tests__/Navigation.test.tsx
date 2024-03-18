import React from "react";
import { render, screen } from "@testing-library/react";
import { Navigation } from "../Navigation";

test("renders navigation", () => {
  render(<Navigation />);
  const element = screen.getByTestId("Navigation");
  expect(element).toHaveClass("Navigation");
});
