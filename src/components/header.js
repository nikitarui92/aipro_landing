import { html, css } from 'lit-element';

import { BaseElement } from '../base-element'

class Header extends BaseElement {

  static get styles(){
    return [
      super.styles,
      css`
        #logo {
          color: #2a9d8f;
        }
      `
    ]
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
            <a href="#" id="logo" class="navbar-item has-text-weight-bold is-size-2">aipro</a>
            <a @click="${this._onNavbarBurgerClick}" role="button" aria-expanded="true" class="navbar-burger" aria-label="menu" data-target="menu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="menu" class="navbar-menu">
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

  _toggleMenu(){
    const navbarBurger = this.shadowRoot.querySelector('.navbar-burger');
    const menu = this.shadowRoot.getElementById('menu');

    navbarBurger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  _onMenuItemClick(e){
    e.preventDefault();
    e.stopPropagation();
    
    const target = e.currentTarget
    const oldURL = location.href
    const newURL = target.href

    this._toggleMenu()

    if (oldURL === newURL){
      window.dispatchEvent(new HashChangeEvent("hashchange", { newURL, oldURL }))
    }

    location.hash = target.hash
  }

  _onNavbarBurgerClick(e){
    this._toggleMenu()
  }

}

customElements.define('l-header', Header);
