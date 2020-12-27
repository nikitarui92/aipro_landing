import { LitElement, html, css } from 'lit-element';

import './components/header'

class LandingApp extends LitElement {

    render() {
        return html`
        <section class="section">
            <l-header></l-header>
        <section>
    `;
    }
}

customElements.define('l-app', LandingApp);
