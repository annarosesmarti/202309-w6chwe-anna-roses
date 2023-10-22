import App from "./App";

describe("Given an App component", () => {
  describe("When it receives a body parent element", () => {
    test("Then it should show a main-header class", () => {
      const body = document.querySelector("body")!;
      const className = "main-header";

      const app = new App(body);
      app.render();

      const heading = body.querySelector("header");

      expect(heading).not.toBeNull();
      expect(heading?.className).toBe(className);
    });
  });
});
