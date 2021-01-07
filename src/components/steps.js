import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class Steps extends BaseElement {

    render() {
        return html`
        <section class="hero has-background-dark is-medium">
            <div class="hero-head">
                <div class="container has-text-centered mt-6 px-1">
                    <h1 class="title has-text-white">
                        Этапы проработки задачи
                    </h1>
                </div>
            </div>
            <div class="hero-body">
                <div class="container has-text-white">
                    <ul class="steps has-content-centered">
                        <li class="steps-segment is-active">
                            <span class="steps-marker is-warning"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Постановка гипотезы</p>
                                <p>Вы приходите к нам с проблемой, мы вместе находим решение</p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Сбор и анализ данных</p>
                                <p>Мы используем открытые данные или собираем свои </p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Обучение модели</p>
                                <p>На этом этапе происходит самое главное: мы обучаем модель, которая в дальнейшем будет
                                    работать за Вас </p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Получение и применение модели</p>
                                <p>Вы получаете доступ к модели или удобному API. Мы продолжаем вести ваш проект и постоянно
                                    улучшаем модель </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-steps', Steps);
