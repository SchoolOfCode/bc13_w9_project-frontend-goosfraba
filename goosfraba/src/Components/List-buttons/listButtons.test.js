import { screen, render } from "@testing-library/react";
import ListButtons from "./listButtons";
import App from "../App/App";
describe("Check if the list button images are in document", () => {
  test("Check the edit button image", () => {
    render(<ListButtons />);
    const buttonEditImg = screen.getByAltText("edit Button");
    expect(buttonEditImg).toBeInTheDocument();
  });
  test("Check the done button image", () => {
    render(<ListButtons />);
    const buttonDoneImg = screen.getByAltText("done Button");
    expect(buttonDoneImg).toBeInTheDocument();
  });
  test("Check the delete button image", () => {
    render(<ListButtons />);
    const deleteButtonImg = screen.getByAltText("delete Button");
    expect(deleteButtonImg).toBeInTheDocument();
  });
});
describe("Check if the buttons exist", () => {
  test("Check if the edit button renders on page", () => {
    render(<ListButtons />);
    const editButton = screen.getByTestId("editB");
    expect(editButton).toBeInTheDocument();
  });
  test("Check if the done button renders on page", () => {
    render(<ListButtons />);
    const doneButton = screen.getByTestId("doneB");
    expect(doneButton).toBeInTheDocument();
  });
  test("THIS IS THE CURRENT TEST", () => {
    render(<ListButtons />);
    const doneButton = screen.getByTestId("deleteB");
    expect(doneButton).toBeInTheDocument();
  });
});