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
                <div class="container has-text-white">
                    <div class="steps">
                        <div class="step-item">
                            <div class="step-marker">
                                <span class="icon">
                                    <i class="fa fa-check"></i>
                                </span>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Постановка гипотезы</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-marker"></div>
                            <div class="step-details">
                                <p class="step-title">Сбор и анализ данных</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-marker"></div>
                            <div class="step-details">
                                <p class="step-title">Обучение модели</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <div class="step-marker">
                                <span class="icon">
                                    <i class="fa fa-flag"></i>
                                </span>
                            </div>
                            <div class="step-details">
                                <p class="step-title">Получение и применение модели</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-steps', Steps);
