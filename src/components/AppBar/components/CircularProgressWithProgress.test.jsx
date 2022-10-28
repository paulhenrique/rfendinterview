/**
 * @jest-environment jsdom
 */
import React from "react";
import CircularProgressWithProgress from "./CircularProgressWithProgress";
import { render, screen } from "@testing-library/react";

describe("Circular Progress With Progress", () => {
  it("should render correctly", () => {
    const { container } = render(<CircularProgressWithProgress value={50} />);
    expect(container).toMatchSnapshot();
  });

  it("should value passed to circular progress to be in screen", async () => {
    const value = 50;
    render(
      <CircularProgressWithProgress value={value} score={value} total={value} />
    );
    expect(await screen.findByText(`${value}/${value}`));
  });
});
