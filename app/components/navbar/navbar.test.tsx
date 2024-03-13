import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "@/app/components/navbar/navbar";

describe("Navbar component tests", () => {
  const mockSetCurrentView: jest.Mock<void, [string]> = jest.fn();
  // mock scrollTo before each test
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  // test if the component renders
  it("renders the Navbar component", () => {
    const { container }: { container: Element } = render(
      <Navbar setCurrentView={mockSetCurrentView} />
    );
    expect(container).toBeInTheDocument();
  });

  // test for the name display
  it("displays the name 'Jonathan Brunt'", () => {
    render(<Navbar setCurrentView={mockSetCurrentView} />);
    const nameDisplay: HTMLElement = screen.getByText("Jonathan Brunt");
    expect(nameDisplay).toBeInTheDocument();
  });

  // test for the theme controller's presence and toggle functionality
  it("contains a theme controller that can be toggled", () => {
    render(<Navbar setCurrentView={mockSetCurrentView} />);
    const themeController: HTMLInputElement = screen.getByRole(
      "checkbox"
    ) as HTMLInputElement;
    expect(themeController).toBeInTheDocument();
    // first click to toggle on
    fireEvent.click(themeController);
    expect(themeController).toBeChecked();
    // second click to toggle off
    fireEvent.click(themeController);
    expect(themeController).not.toBeChecked();
  });

  // test for the dropdown menu's presence
  it("has a dropdown menu for navigation", () => {
    render(<Navbar setCurrentView={mockSetCurrentView} />);
    const dropdownButton: HTMLButtonElement = screen.getByRole("button", {
      name: "Menu",
    }) as HTMLButtonElement;
    fireEvent.click(dropdownButton);
    const dropdownContent: HTMLElement = screen.getByText("Home");
    expect(dropdownContent).toBeInTheDocument();
  });

  // test for each menu item's presence and clickability
  it("renders and allows clicking of menu items", () => {
    const menuItems: string[] = [
      "Home",
      "About",
      "Skills",
      "Projects",
      "Blog",
      "YouTube",
      "Contact",
    ];
    render(<Navbar setCurrentView={mockSetCurrentView} />);

    menuItems.forEach((item: string) => {
      const menuItem: HTMLElement = screen.getByText(item);
      expect(menuItem).toBeInTheDocument();
      fireEvent.click(menuItem);
      expect(mockSetCurrentView).toHaveBeenCalledWith(item);
    });
  });

  // test to check if window.scrollTo is called when menu item is clicked
  it("calls window.scrollTo on item click", () => {
    render(<Navbar setCurrentView={mockSetCurrentView} />);
    // Assuming "Home" is one of the items that triggers scrolling
    const menuItem: HTMLElement = screen.getByText("Home");
    fireEvent.click(menuItem);
    // Check if window.scrollTo was called
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });

  // test to check if dropdown menu toggles on click/click outside the menu (to close)
  // it("toggles the dropdown menu on click", async () => {
  //   const { container }: { container: Element } = render(
  //     <Navbar setCurrentView={mockSetCurrentView} />
  //   );
  //   const dropdownButton: HTMLButtonElement = screen.getByRole("button", {
  //     name: "Menu",
  //   }) as HTMLButtonElement;
  //   // open the dropdown menu
  //   fireEvent.click(dropdownButton);
  //   const dropdownContent = screen.getByText("Home");
  //   // check if the dropdown content is visible
  //   expect(dropdownContent).toBeVisible();
  //   fireEvent.mouseDown(container);
  //   fireEvent.click(container);
  //   // check if the dropdown content is not visible
  //   expect(screen.queryByText("Home")).not.toBeVisible();
  // });
});
