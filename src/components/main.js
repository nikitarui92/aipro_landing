import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class Main extends BaseElement {

    static get styles() {
        return [super.styles]
    }

    render() {
        return html`
        <section class="section is-medium">
            <div class="container">
                <h1 class="title">Section</h1>
                <h2 class="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2>
            </div>
        </section>
    `;
    }

}

customElements.define('l-main', Main);
