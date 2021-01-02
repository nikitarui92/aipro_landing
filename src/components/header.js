import { html, css } from 'lit-element';

import { BaseElement } from '../base-element'

class Header extends BaseElement {

  render() {
    return html`
        <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <div class="navbar-item is-unselectable" href="#">
              <p class="has-text-weight-bold is-size-2">aipro</p>
            </div>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end has-text-weight-bold is-size-5">
              <a class="navbar-item">
                Проекты 🧠
              </a>
              <a class="navbar-item">
                Кейсы 🧰
              </a>
              <a class="navbar-item">
                Команда 💪
              </a>
              <a href="#contact" class="navbar-item">
                Контакты 📞
              </a>
            </div>
          </div>
        </nav>
    `;
  }

}

customElements.define('l-header', Header);
