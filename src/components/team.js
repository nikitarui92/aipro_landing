import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'

import './card'

class Team extends BaseElement {

    constructor() {
        super()
        this.cards = [
            {
                fullname: 'Никита Захаров',
                img: './img/niki-card.jpg',
                desc: 'ML Engineering | Software Development | Data Analyst',
                link: '@nikitarui'
            },
            {
                fullname: 'Максим Исаеев',
                img: './img/max-card.jpg',
                desc: 'Data Mining | Software Development | ML Enthusiast',
                link: '@undefhero'
            },
            {
                fullname: 'Доналд Трамп',
                img: './img/max-card.jpg',
                desc: 'Business Analyst Consultant',
                link: '@trump'
            }
        ]
    }

    render() {
        return html`
        <section class="hero is-medium">
            <div class="hero-head">
                <div class="container mt-6">
                    <h1 class="title has-text-centered">
                        Команда
                    </h1>
                </div>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        ${this.cards.map(c => html`
                        <div class="column">
                            <l-card img="${c.img}" desc="${c.desc}" fullname="${c.fullname}"></l-card>
                        </div>
                        `)}
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-team', Team);
