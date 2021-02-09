import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'

class Contact extends BaseElement {

    constructor() {
        super()
    }

    render() {
        return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
            crossorigin="anonymous" />
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <figure class="image is-square">
                                <img src="./img/contact.svg">
                            </figure>
                        </div>
                        <div class="column has-text-right">
                            <div class="container">
                                <h1 class="title is-spaced">
                                    Связаться с нами
                                </h1>
                                <h2 class="subtitle is-size-3">
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <a href="mailto:hello@ai-pro.space">hello@ai-pro.space</a>
                                </h2>
                            </div>
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
