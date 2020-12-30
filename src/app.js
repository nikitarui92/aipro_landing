import { LitElement, html } from 'lit-element';

import {BaseElement} from './base-element'

import './components/header'
import './components/main'

class LandingApp extends BaseElement {

    static get styles() {
        return [super.styles]
    }

    render() {
        return html`
        <l-header></l-header>
        <l-main></l-main>
    `;
    }
}

customElements.define('l-app', LandingApp);
