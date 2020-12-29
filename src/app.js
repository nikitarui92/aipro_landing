import { LitElement, html } from 'lit-element';

import {BaseElement} from './base-element'

import './components/header'

class LandingApp extends BaseElement {

    static get styles() {
        return [super.styles]
    }

    render() {
        return html`
        <l-header></l-header>
    `;
    }
}

customElements.define('l-app', LandingApp);
