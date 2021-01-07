import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'

import './full-card'

class Projects extends BaseElement {

    constructor() {
        super()
        this.cards = [
            {
                fullname: 'Работы с большими данными',
                img: './img/plot.jpg',
                desc: 'Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.',
                link: '@nikitarui'
            },
            {
                fullname: 'Нейронные сети',
                img: './img/neural.jpg',
                desc: 'Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.',
                link: '@undefhero'
            },
            {
                fullname: 'Запуск искуственных спутников',
                img: './img/rocket.jpg',
                desc: `Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.`,
                link: '@nikitarui'
            },
            {
                fullname: 'Искуственный интеллект',
                img: './img/rover.jpg',
                desc: 'Силовое поле, как можно показать с помощью не совсем тривиальных вычислений, расщепляет межатомный солитон.',
                link: '@undefhero'
            },

        ]
    }

    render() {
        return html`
        <section class="hero has-background-light pt-6">
            <div class="container">
                <h1 class="title">
                    Проекты
                </h1>
            </div>
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8">
                            <div class="tile">
                                <div class="tile is-parent">
                                    ${this.cards.slice(0, 1).map(c => html`
                                    <div class="column">
                                        <l-full-card link="${c.link}" img="${c.img}" desc="${c.desc}" fullname="${c.fullname}">
                                        </l-full-card>
                                    </div>
                                    `)}
                                </div>
                                <div class="tile is-parent">
                                    ${this.cards.slice(1, 2).map(c => html`
                                    <div class="column">
                                        <l-full-card link="${c.link}" img="${c.img}" desc="${c.desc}" fullname="${c.fullname}">
                                        </l-full-card>
                                    </div>
                                    `)}
                                </div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            ${this.cards.slice(2, 3).map(c => html`
                            <div class="column">
                                <l-full-card link="${c.link}" img="${c.img}" desc="${c.desc}" fullname="${c.fullname}">
                                </l-full-card>
                            </div>
                            `)}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-projects', Projects);
