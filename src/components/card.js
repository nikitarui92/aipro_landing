

import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class Card extends BaseElement {

    static get properties() {
        return {
            img: { type: String },
            desc: { type: String },
            fullname: { type: String },
            link: { type: String }
        }
    }

    constructor() {
        super()
        this.img = ''
        this.desc = ''
        this.fullname = ''
        this.link = ''
    }

    render() {
        return html`
        <div class="box">
            <article class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img src="${this.img}" alt="Card">
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>${this.fullname}</strong>
                            <a href="#"><small>${this.link}</small></a>
                        </p>
                        <p>
                            ${this.desc}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    `;
    }

}

customElements.define('l-card', Card);
