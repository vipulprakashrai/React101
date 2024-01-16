import {render,screen} from "@testing-library/react";
import Restaurant from "../Restaurant";
import Mock_Data from "../MockData/restaurantCardMock.json";
import "@testing-library/jest-dom"

test("it should render the restaurantCard component with props data", ()=>{
    render(
        <Restaurant resData={Mock_Data}/>
    )
    const name = screen.getByText("White Hart Pizza");

    expect(name).toBeInTheDocument();
}); 

