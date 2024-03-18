import { render, fireEvent, screen, within } from "@testing-library/react";
import Page from "@/app/page";

// Mocking window.scrollTo
window.scrollTo = jest.fn();

interface MenuItem {
  name: string;
  markerText: string;
}

describe("Navbar and Page Integration Tests", () => {
  const menuItems: MenuItem[] = [
    { name: "Home", markerText: "Jonathan Brunt: AI Engineer" },
    { name: "Skills", markerText: "Skills" },
    { name: "Projects", markerText: "Projects" },
    { name: "Blog", markerText: "My Blog" },
    { name: "YouTube", markerText: "My YouTube" },
    { name: "Contact", markerText: "Contact" },
  ];

  menuItems.forEach((item) => {
    it(`updates the view to "${item.name}" when ${item.name} is clicked in the Navbar`, () => {
      render(<Page />);
      const navbar: HTMLElement = screen.getByTestId("navbar");
      const navbarItem: HTMLAnchorElement = within(navbar).getByText(item.name);
      fireEvent.click(navbarItem);

      // check if the specific section is now displayed
      const sectionMarker: HTMLHeadingElement = screen.getByRole("heading", {
        name: item.markerText,
      });
      expect(sectionMarker).toBeInTheDocument();
      expect(sectionMarker.tagName).toBe("H1");
    });
  });

  // check if the Navbar remains in the document after clicking a menu item
  it("keeps the Navbar in the document after menu item interactions", () => {
    render(<Page />);
    const navbar: HTMLElement = screen.getByTestId("navbar");
    const navbarItem: HTMLAnchorElement = within(navbar).getByText(
      menuItems[0].name
    );
    fireEvent.click(navbarItem);

    // Assuming 'Navbar' is part of your navbar component (adjust as necessary)
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });
});
