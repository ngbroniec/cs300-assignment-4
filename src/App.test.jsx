import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App.jsx";

// Two sample tests so `npm test` passes from the starter.
// They do not count toward your required tests. Replace them with tests of your own behavior.
test("renders a main landmark with the page heading", () => {
  render(<App />);
  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { level: 1, name: "Alex's Reading List" })
  ).toBeInTheDocument();
});

test("starts with the eight supplied books", () => {
  render(<App />);
  expect(screen.getAllByRole("listitem")).toHaveLength(8);
});
