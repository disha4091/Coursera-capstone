import { render, screen, fireEvent } from "@testing-library/react";
import Nav from "./Nav"; // Path to your Nav component

describe("Nav Component", () => {
  test("renders the Nav component with logo and menu items", () => {
    render(<Nav />);

    // Check if the logo is rendered
    const logoElement = screen.getByAltText("logo"); // Assuming the logo image has alt text.
    expect(logoElement).toBeInTheDocument();

    // Check if the navigation links are present
    const homeLink = screen.getByText("Home");
    const aboutLink = screen.getByText("About");
    const servicesLink = screen.getByText("Services");
    const menuLink = screen.getByText("Menu");
    const reservationsLink = screen.getByText("Reservations");
    const orderOnlineLink = screen.getByText("Order Online");
    const loginLink = screen.getByText("Login");

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(orderOnlineLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  
});

