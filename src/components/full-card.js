

import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class FullCard extends BaseElement {

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
        <div class="card">
            <div class="card-image">
                <figure class="image is-squre">
                    <img src="${this.img}" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${this.fullname}</p>
                    </div>
                </div>
        
                <div class="content">${this.desc}</div>
            </div>
        </div>
    `;
    }
}

customElements.define('l-full-card', FullCard);
