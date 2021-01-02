import { LitElement, html } from 'lit-element';

import {BaseElement} from './base-element'

import './components/header'
import './components/main'
import './components/contact'

class LandingApp extends BaseElement {

    render() {
        return html`
        <l-header></l-header>
        <l-main></l-main>
        <l-contact></l-contact>
    `;
    }
}

customElements.define('l-app', LandingApp);
