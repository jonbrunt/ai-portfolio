import { render, screen } from "@testing-library/react";
import About from "@/app/components/about/about";

describe("About component unit tests", () => {
  // test if the component renders
  it("renders the About component", () => {
    const { container }: { container: Element } = render(<About />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'About'", () => {
    render(<About />);
    const heading: HTMLHeadingElement = screen.getByText(
      "About"
    ) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  // test for image and its properties
  it("has an Image element with height and width attrs of 320", () => {
    render(<About />);
    const image: HTMLImageElement = screen.getByAltText(
      "Jonathan Brunt's Logo"
    ) as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "320");
    expect(image).toHaveAttribute("height", "320");
  });

  // test for multiple p elements with text content
  it("has at least two p elements each with text of 50 or more characters", () => {
    render(<About />);
    const allElements: HTMLElement[] = screen.getAllByText(/./);
    const paragraphs: HTMLElement[] = allElements.filter(
      (element) => element.tagName === "P"
    );

    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
      expect(paragraph.textContent?.length).toBeGreaterThanOrEqual(50);
    });
  });

  // test for button element with correct title
  it("has a button with the text 'Open CV'", () => {
    render(<About />);
    const button: HTMLButtonElement = screen.getByRole("button", {
      name: "Open CV",
    }) as HTMLButtonElement;

    expect(button).toBeInTheDocument();
  });
});
