import { html, css } from 'lit-element';

import { BaseElement } from '../base-element'

class Header extends BaseElement {

  static get styles() {
    return [
      css`
        #logo {
          user-select: none;
        }
      `,
      super.styles
    ]
  }

  render() {
    return html`
        <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <div id="logo" class="navbar-item is-size-3" href="#">
              <strong>aipro</strong>
            </div>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item">
                Проекты
              </a>
              <a class="navbar-item">
                Кейсы
              </a>
              <a class="navbar-item">
                Контакты
              </a>
            </div>
          </div>
        </nav>
    `;
  }

}

customElements.define('l-header', Header);
