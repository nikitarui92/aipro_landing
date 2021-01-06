import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class Steps extends BaseElement {

    render() {
        return html`
        <section class="hero has-background-dark mt-6">
            <div class="hero-body">
            <div class="container">
                <h1 class="title has-text-white has-text-centered">
                    Этапы проработки задачи
                </h1>
            </div>
            <div class="hero-body">
                <div class="container has-text-white is-large">
                    <ul class="steps has-content-centered">
                        <li class="steps-segment is-active">
                            <span class="steps-marker is-warning"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Постановка гипотезы</p>
                                <p>Вы приходите к нам с проблемой. Мы вместе находим решение.</p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Сбор и анализ данных</p>
                                <p>Мы используем открытые данные или собираем свои. </p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Обучение модели</p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Получение и применение модели</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-steps', Steps);
