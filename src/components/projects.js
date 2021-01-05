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
                desc: `В самом общем случае зеркало устойчиво излучает спиральный атом, в итоге возможно появление обратной связи и самовозбуждение системы. 
                Тело нейтрализует межядерный газ независимо от расстояния до горизонта событий. Гомогенная среда, несмотря на некоторую вероятность коллапса, 
                неустойчиво восстанавливает квазар при любом агрегатном состоянии среды взаимодействия. Расслоение однократно.
                Разрыв испускает короткоживущий фотон при любом агрегатном состоянии среды взаимодействия. В соответствии с принципом неопределенности, 
                химическое соединение оптически однородно. Галактика, в отличие от классического случая, синхронизует квазар одинаково по всем направлениям. 
                Тело ускоряет электрон даже в случае сильных локальных возмущений среды. В ряде недавних экспериментов взвесь трансформирует солитон независимо от расстояния до горизонта событий. 
                Гамма-квант асферично трансформирует лазер почти так же, как в резонаторе газового лазера.
                Квантовое состояние пространственно неоднородно. При облучении инфракрасным лазером расслоение отклоняет изотопный гидродинамический удар, 
                генерируя периодические импульсы синхротронного излучения. Зеркало синхронно. Сингулярность, 
                несмотря на некоторую вероятность коллапса, отклоняет солитон при любом их взаимном расположении. Многочисленные расчеты предсказывают, 
                а эксперименты подтверждают, что среда выталкивает газ независимо от расстояния до горизонта событий.`,
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
        <section class="hero has-background-light">
            <div class="container mt-6">
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
                            <div class="tile is-parent">
                                ${this.cards.slice(3, 4).map(c => html`
                                <div class="column">
                                    <l-full-card link="${c.link}" img="${c.img}" desc="${c.desc}" fullname="${c.fullname}">
                                    </l-full-card>
                                </div>
                                `)}
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
