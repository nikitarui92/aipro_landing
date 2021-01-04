import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'

import styles from './header.scss'
class Header extends BaseElement {

  static get styles() {
    return unsafeCSS(styles.toString());
  }

  constructor(){
    super()

    this.menuItems = [
      {
        text: 'Проекты 🧠',
        href: '#projects'
      },
      {
        text: 'Команда 💪',
        href: '#team'
      },
      {
        text: 'Контакты 📞',
        href: '#contact'
      }
    ]

  }

  render() {
    return html`
        <nav class="navbar is-transparent is-spaced has-shadow" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <div class="navbar-item is-unselectable">
              <p class="has-text-link	has-text-weight-bold is-size-2">aipro</p>
            </div>
        
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end has-text-weight-bold is-size-5">
              ${this.menuItems.map(m=>
                html`
                  <a href="${m.href}" @click="${this._onMenuItemClick}" class="navbar-item" >${m.text}</a>
                `
              )}
            </div>
          </div>
        </nav>
        
    `;
  }

  _onMenuItemClick(e){
    e.preventDefault();
    e.stopPropagation();
    
    const target = e.currentTarget
    const oldURL = location.href
    const newURL = target.href

    if (oldURL === newURL){
      window.dispatchEvent(new HashChangeEvent("hashchange", { newURL, oldURL }))
    }

    location.hash = target.hash
  }

}

customElements.define('l-header', Header);
