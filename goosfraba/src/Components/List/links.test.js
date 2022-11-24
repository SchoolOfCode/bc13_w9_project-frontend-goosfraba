import Links from "./links";
import { test, expect } from "@jest/globals"
import { screen, render } from "@testing-library/react"

test("Pictures are loading", () => {
  render(<Links />)
  const links = screen.getAllByRole("img")
  expect(links).toReturn(7);
});
// pushung test
// test("should navigate to react when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="react-link" href=“https://reactjs.org/”></a>);
//   expect(getByTestId("react-link")).toHaveAttribute("href", "https://reactjs.org/");
// });
// //
// test("should navigate to W3 Schools when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="w3-link" href=“https://www.w3schools.com/”></a>);
//   expect(getByTestId("w3-link")).toHaveAttribute("href", "https://www.w3schools.com/");
// });
// //
// test("should navigate to CodeWars when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="codeWars-link" href=“https://www.codewars.com/dashboard”></a>);
//   expect(getByTestId("codeWars-link")).toHaveAttribute("href", "https://www.codewars.com/dashboard");
// });
// //
// test("should navigate to NPM when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="npm-link" href=“https://www.npmjs.com/”></a>);
//   expect(getByTestId("npm-link")).toHaveAttribute("href", "https://www.npmjs.com/");
// });
// //
// test("should navigate to FreeCodeCamp when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="freeCodeCamp-link" href=“https://www.freecodecamp.org/”></a>);
//   expect(getByTestId("freeCodeCamp-link")).toHaveAttribute("href", "https://www.freecodecamp.org/");
// });
// //
// test("should navigate to GitHub when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="gitHub-link" href=“https://github.com/”></a>);
//   expect(getByTestId("gitHub-link")).toHaveAttribute("href", "https://github.com/");
// });
// //
// test("should navigate to SoC when link is clicked", () => {
//   const { getByTestId } = render(<a data-testid="SoC-link" href=“https://www.schoolofcode.com/”></a>);
//   expect(getByTestId("SoC-link")).toHaveAttribute("href", "https://www.schoolofcode.com/");
// });