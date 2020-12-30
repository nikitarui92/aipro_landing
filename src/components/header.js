import { html, css } from 'lit-element';

import { BaseElement } from '../base-element'

class Header extends BaseElement {

  static get styles() {
    return [super.styles]
  }

  render() {
    return html`
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item">
                Contact
              </div>
            </div>
          </div>
        </nav>
    `;
  }

}

customElements.define('l-header', Header);
