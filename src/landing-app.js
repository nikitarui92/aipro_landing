import { LitElement, html } from 'lit-element';

import './views/header'

class LandingApp extends LitElement {

    render() {
        return html`
        <section class="section">
            <l-header></l-header>
        <section>
    `;
    }
}

customElements.define('landing-app', LandingApp);
