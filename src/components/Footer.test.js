import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "./Footer"; // Path to your Nav component

describe("Footer Component", () => {
  test("renders the Footer component with logo and menu items", () => {
    render(<Footer />);

    // Check if the logo is rendered
    const logoElement = screen.getByAltText("logo"); 
    expect(logoElement).toBeInTheDocument();

    const aboutLink = screen.getByText("About");
    const menuLink = screen.getByText("Menu");
    const reservationsLink = screen.getByText("Reservations");
    const orderOnlineLink = screen.getByText("Order Online");
    const loginLink = screen.getByText("Login");
    const socialMediaLinks = screen.getByText("Social Media Links");

    expect(aboutLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
    expect(reservationsLink).toBeInTheDocument();
    expect(orderOnlineLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(socialMediaLinks).toBeInTheDocument();
  });
});

