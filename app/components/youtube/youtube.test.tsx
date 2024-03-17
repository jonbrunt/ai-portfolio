import { render, screen, within } from "@testing-library/react";
import YouTube from "@/app/components/youtube/youtube";
import { videos, Video } from "@/app/components/youtube/youtubeMockData";

describe("YouTube component unit tests", () => {
  // test that component renders
  it("renders the YouTube component", () => {
    const { container }: { container: Element } = render(<YouTube />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'My YouTube'", () => {
    render(<YouTube />);
    const heading: HTMLHeadingElement = screen.getByRole("heading", {
      name: "My YouTube",
    }) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
  });

  // test for descriptive p element and a minimum length
  it("has an opening descriptive paragraph", () => {
    render(<YouTube />);
    const openingParagraph: HTMLParagraphElement =
      screen.getByTestId("opening-paragraph");
    expect(openingParagraph).toBeInTheDocument();
    expect(openingParagraph.textContent?.length).toBeGreaterThanOrEqual(20);
  });

  // test for each video's image
  it("each card has an image with correct attributes", () => {
    render(<YouTube />);

    videos.forEach((video: Video, index: number) => {
      const image: HTMLImageElement = screen.getByAltText(
        video.altAttr
      ) as HTMLImageElement;

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("width", "320");
      expect(image).toHaveAttribute("height", "320");
      expect(index).toBeLessThanOrEqual(videos.length);
    });
  });

  // test for each videos's text information (header and paragraph)
  it("renders each video from the youtubeMockData with a heading and a description", () => {
    render(<YouTube />);
    const cards: HTMLElement[] = screen.getAllByRole("article");

    cards.forEach((card) => {
      const heading: HTMLHeadingElement = within(card).getByRole("heading");
      const paragraph: HTMLElement[] = within(card)
        .getAllByText(/./)
        .filter((element) => element.tagName === "P") as HTMLParagraphElement[];

      expect(cards.length).toBe(videos.length);
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H2");
      expect(heading.textContent?.length).toBeGreaterThanOrEqual(3);
      expect(paragraph.length).toBe(1);
      expect(paragraph[0]).toBeInTheDocument();
      expect(paragraph[0].textContent?.length).toBeGreaterThanOrEqual(5);
    });
  });

  // test for each videos's button
  it("each project renders a 'Watch' button", () => {
    render(<YouTube />);
    const cards: HTMLElement[] = screen.getAllByRole("article");

    videos.forEach((video: Video, index: number) => {
      const watchButton: HTMLButtonElement = within(cards[index]).getByRole(
        "button",
        {
          name: "Watch",
        }
      );
      expect(watchButton).toBeInTheDocument();
    });
  });
});
