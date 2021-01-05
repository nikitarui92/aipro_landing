import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'

class Contact extends BaseElement {

    constructor() {
        super()

    }

    render() {
        return html`
        <section class="hero mt-6">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <figure class="image is-square">
                                <img src="./img/contact.svg">
                            </figure>
                        </div>
                        <div class="column has-text-centered">
                            <h1 class="title is-spaced">
                                Мы на связи
                            </h1>
                            <h2 class="subtitle">
                                Телега: 123
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-contact', Contact);
