import { render, screen, within } from "@testing-library/react";
import Blog from "@/app/components/blog/blog";
import { posts, Post } from "@/app/components/blog/blogMockData";

describe("Blog component unit tests", () => {
  // test that component renders
  it("renders the Blog component", () => {
    const { container }: { container: Element } = render(<Blog />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'My Blog'", () => {
    render(<Blog />);
    const heading: HTMLHeadingElement = screen.getByRole("heading", {
      name: "My Blog",
    }) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
  });

  // test for descriptive p element and a minimum length
  it("has an opening descriptive paragraph", () => {
    render(<Blog />);
    const openingParagraph: HTMLParagraphElement =
      screen.getByTestId("opening-paragraph");
    expect(openingParagraph).toBeInTheDocument();
    expect(openingParagraph.textContent?.length).toBeGreaterThanOrEqual(20);
  });

  // test for each post's image
  it("each card has an image with correct attributes", () => {
    render(<Blog />);

    posts.forEach((post: Post, index: number) => {
      const image: HTMLImageElement = screen.getByAltText(
        post.altAttr
      ) as HTMLImageElement;

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("width", "320");
      expect(image).toHaveAttribute("height", "320");
      expect(index).toBeLessThanOrEqual(posts.length);
    });
  });

  // test for each post's text information (header and paragraph)
  it("renders each project from the projectMockData with a heading and a description", () => {
    render(<Blog />);
    const cards: HTMLElement[] = screen.getAllByRole("article");

    cards.forEach((card) => {
      const heading: HTMLHeadingElement = within(card).getByRole("heading");
      const paragraph: HTMLElement[] = within(card)
        .getAllByText(/./)
        .filter((element) => element.tagName === "P") as HTMLParagraphElement[];

      expect(cards.length).toBe(posts.length);
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H2");
      expect(heading.textContent?.length).toBeGreaterThanOrEqual(3);
      expect(paragraph.length).toBe(1);
      expect(paragraph[0]).toBeInTheDocument();
      expect(paragraph[0].textContent?.length).toBeGreaterThanOrEqual(5);
    });
  });

  // test for each posts's button
  it("each project renders a 'Read' button", () => {
    render(<Blog />);
    const cards: HTMLElement[] = screen.getAllByRole("article");

    posts.forEach((post: Post, index: number) => {
      const readButton = within(cards[index]).getByRole("button", {
        name: "Read",
      });
      expect(readButton).toBeInTheDocument();
    });
  });
});
