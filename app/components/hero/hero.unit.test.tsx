import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/hero/hero";

describe("Hero component unit tests", () => {
  // test if the component renders
  it("renders the Hero component", () => {
    const { container }: { container: Element } = render(<Hero />);
    expect(container).toBeInTheDocument();
  });

  // test for image and its properties
  it("has an Image element with length and width attrs set to 384", () => {
    render(<Hero />);
    const image: HTMLImageElement = screen.getByAltText(
      "Jonathan Brunt Professional Picture"
    ) as HTMLImageElement;

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", "384");
    expect(image).toHaveAttribute("height", "384");
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'Jonathan Brunt: AI Engineer'", () => {
    render(<Hero />);
    const heading: HTMLHeadingElement = screen.getByText(
      "Jonathan Brunt: AI Engineer"
    ) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  // test for p element with text content
  it("has a p element with text longer than 100 characters", () => {
    render(<Hero />);
    const paragraph: HTMLParagraphElement = screen.getByText(
      (content, element) =>
        element !== null &&
        element.tagName.toLowerCase() === "p" &&
        content.length > 100
    ) as HTMLParagraphElement;

    expect(paragraph).toBeInTheDocument();
  });

  // test for button element with correct title
  it("has a button leading to projects", () => {
    render(<Hero />);
    const button: HTMLButtonElement = screen.getByRole("button", {
      name: "My Projects",
    }) as HTMLButtonElement;

    expect(button).toBeInTheDocument();
  });
});
