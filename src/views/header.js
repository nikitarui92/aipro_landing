import { LitElement, html } from 'lit-element';

class HeaderView extends LitElement {
  render() {
    return html`
        <div class="container">
          <h1 class="title">
            Hello World
          </h1>
          <p class="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
    `;
  }
}

customElements.define('l-header', HeaderView);
