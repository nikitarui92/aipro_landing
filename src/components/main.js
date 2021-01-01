import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class Main extends BaseElement {

    render() {
        return html`
        <section class="section is-medium">
            <div class="container">
                <h1 class="title">AI</h1>
                <h2 class="subtitle">
                    Мы готовы вам помочь
                </h2>
            </div>
        </section>
    `;
    }

}

customElements.define('l-main', Main);
