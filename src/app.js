import { LitElement, html } from 'lit-element';

import { BaseElement } from './base-element'

import './components/header'
import './components/main'
import './components/projects'
import './components/team'
import './components/blackbox'
import './components/contact'
import './components/steps'
import './components/tools'

class App extends BaseElement {

    constructor() {
        super();
        const shadowRoot = this.shadowRoot
        
        window.addEventListener('hashchange', function () {
            const hash = location.hash.replace('#', '');
            if (hash){
                const el = shadowRoot.querySelector(`#${hash}`);
                el.scrollIntoView();
            }
        }, false);

    }

    render() {
        return html`
        <l-header></l-header>
        <l-main id="main"></l-main>
        <l-steps id="steps"></l-steps>
        <l-projects id="projects"></l-projects>
        <l-team id="team"></l-team>
        <!-- <l-blackbox></l-blackbox> -->
        <l-tools></l-tools>
        <l-contact id="contact"></l-contact>
        `
    }

}

customElements.define('l-app', App);
