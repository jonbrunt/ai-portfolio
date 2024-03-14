import { render, screen, within } from "@testing-library/react";
import Skills, { renderSkills } from "@/app/components/skills/skills";

describe("Skills component unit tests", () => {
  // test if the component renders
  it("renders the Skills component", () => {
    const { container }: { container: Element } = render(<Skills />);
    expect(container).toBeInTheDocument();
  });

  // test for h1 element with correct title
  it("has an h1 element with the text 'Skills'", () => {
    render(<Skills />);
    const heading: HTMLHeadingElement = screen.getByText(
      "Skills"
    ) as HTMLHeadingElement;

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  // test for p element and its content length
  it("has a descriptive paragraph", () => {
    render(<Skills />);
    // select the first paragraph element
    const paragraph: HTMLParagraphElement = screen.getByText(
      (content, element) => {
        return element?.tagName.toLowerCase() === "p" && content.length > 0;
      }
    ) as HTMLParagraphElement;

    expect(paragraph).toBeInTheDocument();
    expect(paragraph.textContent?.length).toBeGreaterThanOrEqual(50);
  });

  // test for AI Engineering heading
  it("has an h2 element for AI Engineering", () => {
    render(<Skills />);
    const aiHeading: HTMLHeadingElement = screen.getByText(
      "AI Engineering"
    ) as HTMLHeadingElement;

    expect(aiHeading).toBeInTheDocument();
    expect(aiHeading.tagName).toBe("H2");
  });
  it("has a ul of AI skills with at least 8 entries and includes 'Python'", () => {
    render(<Skills />);
    const aiSkillsSection: HTMLElement = screen.getByTestId("ai-skills");
    const aiSkillsList: HTMLUListElement = within(aiSkillsSection).getByRole(
      "list"
    ) as HTMLUListElement;
    const aiListItems: HTMLElement[] =
      within(aiSkillsList).getAllByRole("listitem");

    expect(aiListItems.length).toBeGreaterThanOrEqual(8);
    expect(aiListItems.length).toBeLessThanOrEqual(12);
    expect(aiSkillsList).toHaveTextContent("Python");
  });

  // test for Fullstack Development heading
  it("has an h2 element for fullstack development", () => {
    render(<Skills />);
    const fullstackHeading: HTMLHeadingElement = screen.getByText(
      "Fullstack Development"
    ) as HTMLHeadingElement;

    expect(fullstackHeading).toBeInTheDocument();
    expect(fullstackHeading.tagName).toBe("H2");
  });

  // test for fullstack skills presence and min/max number of entries
  it("has a ul of fullstack skills with at least 8 entries and includes 'TypeScript'", () => {
    render(<Skills />);
    const fullstackSkillsSection: HTMLElement =
      screen.getByTestId("fullstack-skills");
    const fullstackSkillsList: HTMLUListElement = within(
      fullstackSkillsSection
    ).getByRole("list") as HTMLUListElement;
    const fullstackListItems: HTMLElement[] =
      within(fullstackSkillsList).getAllByRole("listitem");

    expect(fullstackListItems.length).toBeGreaterThanOrEqual(8);
    expect(fullstackListItems.length).toBeLessThanOrEqual(12);
    expect(fullstackSkillsList).toHaveTextContent("TypeScript");
  });

  // test the renderSkills function
  it("renderSkills function renders a list of skills", () => {
    const skills: string[] = ["Test Skill 1", "Test Skill 2"];
    render(renderSkills(skills));
    const listItems = screen.getAllByRole("listitem") as HTMLLIElement[];

    expect(listItems.length).toBe(skills.length);

    listItems.forEach((li, index) => {
      expect(li).toHaveTextContent(skills[index]);
    });
  });
});
