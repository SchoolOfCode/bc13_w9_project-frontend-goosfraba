import Links from "./links";
import { test, expect } from "@jest/globals";
import { screen, render } from "@testing-library/react";
describe("seven images are rendered on the Goosfraba home page", () => {
  test("react image", () => {
    render(<Links />);
    const react = screen.getByAltText("react");
    expect(react).toBeInTheDocument();
  });
  test("W3schools image", () => {
    render(<Links />);
    const w3schools = screen.getByAltText("w3schools");
    expect(w3schools).toBeInTheDocument();
  });
  test("codewars image", () => {
    render(<Links />);
    const codewars = screen.getByAltText("codewars");
    expect(codewars).toBeInTheDocument();
  });
  test("npm image", () => {
    render(<Links />);
    const npm = screen.getByAltText("npm");
    expect(npm).toBeInTheDocument();
  });
  test("freecodecamp image", () => {
    render(<Links />);
    const freecodecamp = screen.getByAltText("freecodecamp");
    expect(freecodecamp).toBeInTheDocument();
  });
  test("github image", () => {
    render(<Links />);
    const github = screen.getByAltText("github");
    expect(github).toBeInTheDocument();
  });
  test("soc image", () => {
    render(<Links />);
    const soc = screen.getByAltText("soc");
    expect(soc).toBeInTheDocument();
  });
});
