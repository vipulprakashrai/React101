import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render the login button in the Header Component", ()=> {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header/>
        </Provider>
        </BrowserRouter>   
    );
    
    const loginbtn = screen.getByRole("button", {name: "Login"});
    //const loginBtn = screen.getByText("Login")
    expect(loginbtn).toBeInTheDocument();

});

it("should change the login button to logout buttom on click", ()=> {
    render(
        <BrowserRouter>
          <Provider store={appStore}>
          <Header/>
        </Provider>
        </BrowserRouter>   
    );
    
    const loginbtn = screen.getByRole("button", {name: "Login"});
     fireEvent.click(loginbtn);
    const logoutBtn = screen.getByRole("button") 
    expect(logoutBtn).toBeInTheDocument();

});