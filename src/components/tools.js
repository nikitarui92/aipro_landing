import { html, css } from 'lit-element';

import { BaseElement } from '../base-element'

class Tools extends BaseElement {

    static get styles() {
        return [
            super.styles,
            css`
                .image {
                    width: 50%;
                    margin: auto;
                }
            `
        ]
    }

    constructor() {
        super()
        this.logos = [
            './img/catboost-logo.png',
            './img/nodejs-logo.svg',
            './img/python-logo.svg',
            './img/keras-logo.png'
        ]
    }

    render() {
        return html`
        <section class="hero has-background-light">
            <div class="hero-body">
                <div class="columns is-multiline is-centered is-vcentered">
                    ${this.logos.map(l => html`
                    <div class="column">
                        <figure class="image">
                            <img src="${l}">
                        </figure>
                    </div>
                    `)}
                </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-tools', Tools);
