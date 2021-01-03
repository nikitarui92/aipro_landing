import { LitElement, html } from 'lit-element';

import {BaseElement} from './base-element'

import './components/header'
import './components/main'
import './components/team'

class LandingApp extends BaseElement {

    render() {
        return html`
        <l-header></l-header>
        <l-main></l-main>
        <l-team></l-team>
    `;
    }
}

customElements.define('l-app', LandingApp);
