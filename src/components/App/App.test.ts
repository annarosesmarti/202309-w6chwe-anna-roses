import App from "./App";

describe("Given an App component", () => {
  describe("When it receies a body parent element", () => {
    test("Then it should show a pokemon logo in a header", () => {
      const body = document.querySelector("body")!;

      const app = new App(body);
      app.render();

      const heading = body.querySelector("header");

      expect(heading).not.toBeNull();
      expect(heading?.className).toBe("main-header");
    });
  });
});
