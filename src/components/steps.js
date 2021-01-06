import { html } from 'lit-element';

import { BaseElement } from '../base-element'

class Steps extends BaseElement {

    render() {
        return html`
        <section class="hero has-background-dark px-6">
            <div class="hero-body">
                <div class="container has-text-white is-large">
                    <ul class="steps has-content-centered">
                        <li class="steps-segment is-active">
                            <span class="steps-marker is-warning"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Постановка гипотезы</p>
                            </div>
                        </li>
                        <li class="steps-segment is-active">
                            <span class="steps-marker"></span>
                            <div class="steps-content">
                                <p class="is-size-4">Сбор и анализ данных</p>
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
        </section>
    `;
    }

}

customElements.define('l-steps', Steps);
