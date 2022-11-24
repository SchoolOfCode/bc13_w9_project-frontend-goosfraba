import InputForm from "./InputForm";
import { test, expect } from "@jest/globals"
import { screen, render } from "@testing-library/react"

test("Add button should contain Add in its name", () => {
    const buttonText = "Add";
    render(<InputForm buttonText={buttonText} />);
    const button = screen.getByRole("button", { name: "Add"});
    expect(button).toBeInTheDocument();

})

// This test passes ^^