// testing rtl and jest before merge
import { render, screen } from "@testing-library/react";
import Hero from "@/app/components/hero";

it("should have Jonathan in the text", () => {
  render(<Hero />);

  const myElem = screen.getByText((content) => content.includes("Jonathan"));

  expect(myElem).toBeInTheDocument();
});
