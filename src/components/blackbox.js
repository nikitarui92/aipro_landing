import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class BlackBox extends BaseElement {

    render() {
        return html`
        <section class="hero has-background-dark mt-6">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title has-text-white">
                        AI pro
                    </h1>
                </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-blackbox', BlackBox);
