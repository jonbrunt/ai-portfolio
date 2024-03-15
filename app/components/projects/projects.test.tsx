import { render, screen, within } from "@testing-library/react";
import Projects from "@/app/components/projects/projects";
import { projects, Project } from "@/app/components/projects/projectMockData";

describe("Projects component unit tests", () => {
  // test that component renders
  it("renders the Projects component", () => {
    const { container }: { container: Element } = render(<Projects />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'Projects'", () => {
    render(<Projects />);
    const heading: HTMLHeadingElement = screen.getByRole("heading", {
      name: "Projects",
    }) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
  });

  // test for descriptive p element and a minimum length
  it("has an opening descriptive paragraph", () => {
    render(<Projects />);
    const openingParagraph: HTMLParagraphElement =
      screen.getByTestId("opening-paragraph");
    expect(openingParagraph).toBeInTheDocument();
    expect(openingParagraph.textContent?.length).toBeGreaterThanOrEqual(20);
  });

  // test for each project's image
  it("each card has an image with correct attributes", () => {
    render(<Projects />);

    projects.forEach((project: Project, index: number) => {
      const image: HTMLImageElement = screen.getByAltText(
        project.altAttr
      ) as HTMLImageElement;

      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("width", "320");
      expect(image).toHaveAttribute("height", "320");
      expect(index).toBeLessThanOrEqual(projects.length);
    });
  });

  // test for each project's text information (header and paragraph)
  it("renders each project from the projectMockData with a heading and a description", () => {
    render(<Projects />);
    const cards = screen.getAllByRole("article");

    cards.forEach((card) => {
      const heading: HTMLHeadingElement = within(card).getByRole("heading");
      const paragraph: HTMLElement[] = within(card)
        .getAllByText(/./)
        .filter((element) => element.tagName === "P") as HTMLParagraphElement[];

      expect(cards.length).toBe(projects.length);
      expect(heading).toBeInTheDocument();
      expect(heading.tagName).toBe("H2");
      expect(heading.textContent?.length).toBeGreaterThanOrEqual(3);
      expect(paragraph.length).toBe(1);
      expect(paragraph[0]).toBeInTheDocument();
      expect(paragraph[0].textContent?.length).toBeGreaterThanOrEqual(5);
    });
  });

  // test for each project's button/s
  it("each project renders an 'Open App' button and a 'GitHub' button where appropriate", () => {
    render(<Projects />);
    const cards = screen.getAllByRole("article");

    projects.forEach((project: Project, index) => {
      if (project.githubBoolean) {
        const githubButton: HTMLButtonElement = within(cards[index]).getByRole(
          "button",
          {
            name: "GitHub",
          }
        );
        expect(githubButton).toBeInTheDocument();
      }
      const openAppButton = within(cards[index]).getByRole("button", {
        name: "Open App",
      });
      expect(openAppButton).toBeInTheDocument();
    });
  });
});
