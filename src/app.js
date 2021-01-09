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
        window.addEventListener('hashchange', function () {
            const id = location.hash.replace('#', '');
            if (id){
                const el = document.getElementById(id);
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
            <l-tools></l-tools>
            <l-contact id="contact"></l-contact>
        `
    }

}

customElements.define('l-app', App);
