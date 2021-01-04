import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'

class Contact extends BaseElement {

    constructor() {
        super()
        this.cards = [
            {
                fullname: 'Никита Захаров',
                img: './img/niki-card.jpg',
                desc: 'Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.',
                link: '@nikitarui'
            },
            {
                fullname: 'Максим Исаеев',
                img: './img/max-card.jpg',
                desc: 'Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.',
                link: '@undefhero'
            },
            {
                fullname: 'Доналд Трамп',
                img: './img/max-card.jpg',
                desc: 'Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.',
                link: '@trump'
            }
        ]
    }

    render() {
        return html`
        <section class="hero">
            <div class="container">
                <h1 class="title">
                    Контакты
                </h1>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        ${this.cards.map(c => html`
                        <div class="column">
                            <l-card link="${c.link}" img="${c.img}" desc="${c.desc}" fullname="${c.fullname}"></l-card>
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

customElements.define('l-contact', Contact);
