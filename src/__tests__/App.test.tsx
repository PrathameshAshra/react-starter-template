import { describe, it, expect } from "vitest";
import App from "../App";
import { render } from "@testing-library/react";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
  it("Vite + React Should be present", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("label")).toBeInTheDocument();
  });
});
