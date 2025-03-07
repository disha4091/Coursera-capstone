import { render, screen, fireEvent } from "@testing-library/react";
import Menu from "./Menu"; // Path to your Nav component

describe("Menu Component", () => {
  test("renders the Menu component", () => {
    render(<Menu/>);
    const imageElement = screen.getAllByAltText("food"); 
    const img1 = imageElement[0]; 
    expect(img1.src).toContain('https://i.ibb.co/68c9bLv/greek-salad.jpg');

    const recipeName1 = screen.getByText("Greek salad"); 
    expect(recipeName1).toBeInTheDocument();

    const img2 = imageElement[1]; 
    expect(img2.src).toContain('https://i.ibb.co/317GqZv/Bruchetta.png');

    const recipeName2 = screen.getByText("Bruchetta"); 
    expect(recipeName2).toBeInTheDocument();

    const img3 = imageElement[2]; 
    expect(img3.src).toContain('https://i.ibb.co/sm6MfcH/desert.jpg');

    const recipeName3 = screen.getByText("Lemon Dessert"); 
    expect(recipeName3).toBeInTheDocument();

  });
});

