import Component from "../Component/Component.js";

class App extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
  }

  protected populate(): void {
    this.element.innerHTML = `
    <header class="main-header">
      <img src="./images/pokemon-logo.webp" alt="" class="image-logo">      
    </header>
    <main class="main">
      <section class="frame container">
      </section>
    </main>
    `;
  }
}

export default App;
