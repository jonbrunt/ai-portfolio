import { render, screen, within } from "@testing-library/react";
import Contact from "@/app/components/contact/contact";

describe("Contact component unit tests", () => {
  // test for component render
  it("renders the Contact component", () => {
    const { container }: { container: Element } = render(<Contact />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with title
  it('has an h1 element with the text "Contact"', () => {
    render(<Contact />);
    const heading: HTMLHeadingElement = screen.getByRole("heading", {
      name: "Contact",
    });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  // test for opening paragraph
  it("has an opening descriptive paragraph", () => {
    render(<Contact />);
    const openingParagraph: HTMLElement =
      screen.getByTestId("opening-paragraph");
    expect(openingParagraph).toBeInTheDocument();
    expect(openingParagraph.textContent?.length).toBeGreaterThanOrEqual(20);
  });

  const cardTitles: string[] = [
    "Email",
    "LinkedIn",
    "GitHub",
    "YouTube",
    "Phone",
  ];

  // test for each contact card and its text content
  it("renders each project from the projectMockData with a heading and a description", () => {
    render(<Contact />);
    const cards: HTMLElement[] = screen.getAllByRole("article");
    expect(cards.length).toBe(cardTitles.length);

    cards.forEach((card) => {
      const heading: HTMLHeadingElement = within(card).getByRole("heading");
      const paragraph: HTMLElement[] = within(card)
        .getAllByText(/./)
        .filter((element) => element.tagName === "P") as HTMLParagraphElement[];

      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H2");
      expect(heading.textContent?.length).toBeGreaterThanOrEqual(5);
      expect(paragraph.length).toBe(1);
      expect(paragraph[0]).toBeInTheDocument();
      expect(paragraph[0].textContent?.length).toBeGreaterThanOrEqual(5);
    });
  });

  // test for SVG elements in the contact cards
  it("renders an SVG element in each contact card", () => {
    render(<Contact />);
    const cards: HTMLElement[] = screen.getAllByRole("article");

    cards.forEach((card: HTMLElement, index: number) => {
      const testId: string = `svg-element-${index + 1}`;
      const svgElement = within(card).getByTestId(testId);

      expect(svgElement).toBeInTheDocument();
      expect(svgElement).toHaveAttribute("width", "50px");
      expect(svgElement).toHaveAttribute("height", "50px");
    });
  });

  // test for each contact card's button
  it("each contact card renders a button", () => {
    render(<Contact />);
    const cards: HTMLElement[] = screen.getAllByRole("article");

    cards.forEach((card: HTMLElement, index: number) => {
      const button: HTMLButtonElement = within(cards[index]).getByRole(
        "button"
      );
      expect(button).toBeInTheDocument();
    });
  });
});
