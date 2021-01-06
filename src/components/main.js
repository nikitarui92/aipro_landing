import { html } from 'lit-element';

import { BaseElement } from '../base-element'

const mainText = 'Клиентоориентированный подход и глубокая проработка задачи. От сбора данных до анализа и обучения модели машинного обучения.'
class Main extends BaseElement {

    render() {
        return html`
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column mt-6">
                            <h1 class="title is-spaced is-size-2">
                                Решаем бизнес-кейсы с помощью машинного обучения
                            </h1>
                            <h2 class="subtitle is-size-4">
                                ${mainText}
                            </h2>
                        </div>
                        <div class="column">
                            <figure class="image is-square">
                                <img src="./img/main.svg">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-main', Main);
