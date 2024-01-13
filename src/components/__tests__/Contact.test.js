import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("is my heading is shown", ()=>{
    render(
        <Contact/>
    );
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument(); 
});

test("is  button is shown in contact component", ()=>{
    render(
        <Contact/>
    );
    //const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    //Assertion
    expect(button).toBeInTheDocument() 
});

test("is  input is rendered in the contact component", ()=>{
    render(
        <Contact/>
    );

    const input = screen.getAllByRole("textbox");
    //Assertion
    expect(input.length).toBe(2); 
});

test("is  input name is shown in contact component", ()=>{
    render(
        <Contact/>
    );
    
    const inputName = screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument(); 
});