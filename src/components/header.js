import { LitElement, html } from 'lit-element';

import { BaseElement } from '../base-element'

class Header extends BaseElement {

  static get styles() {
    return [super.styles]
  }

  render() {
    return html`
        <nav class="level">
          <p class="level-item has-text-centered">
            <a class="link is-info">Home</a>
          </p>
          <p class="level-item has-text-centered">
            <a class="link is-info">Menu</a>
          </p>
          <p class="level-item has-text-centered">
            <strong>aipro</strong>
          </p>
          <p class="level-item has-text-centered">
            <a class="link is-info">Reservations</a>
          </p>
          <p class="level-item has-text-centered">
            <a class="link is-info">Contact</a>
          </p>
        </nav>
    `;
  }

}

customElements.define('l-header', Header);
