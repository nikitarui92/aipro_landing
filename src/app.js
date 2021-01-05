import { LitElement, html } from 'lit-element';

import { BaseElement } from './base-element'

import './components/header'
import './components/main'
import './components/projects'
import './components/team'
import './components/blackbox'
import './components/contact'

class App extends BaseElement {

    constructor() {
        super();
        const shadowRoot = this.shadowRoot
        
        window.addEventListener('hashchange', function () {
            const hash = location.hash;
            const el = shadowRoot.querySelector(`${hash}`);
            if (el)
                el.scrollIntoView();
        }, false);

    }

    render() {
        return html`
        <l-header></l-header>
        <l-main id="main"></l-main>
        <l-projects id="projects"></l-projects>
        <l-team id="team"></l-team>
        <l-blackbox></l-blackbox>
        <l-contact></l-contact>
        `
    }

}

customElements.define('l-app', App);
