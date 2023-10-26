import App from "./App";
import { screen, render } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When it receives a 'Añade un perezoso' title ", () => {
    test("Then it should show 'Añade un perezoso' inside a heading", () => {
      const title = "Añade un perezoso";

      render(<App />);

      const expectedTitle = screen.getByRole("heading", { name: title });

      expect(expectedTitle).toBeInTheDocument();
    });
  });
});
