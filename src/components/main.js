import { html } from 'lit-element';

import { BaseElement } from '../base-element'

const mainText = 'Разрыв вращает квазар. Фотон, в первом приближении, масштабирует вихревой электрон. Вселенная упруго стабилизирует фонон, однозначно свидетельствуя о неустойчивости процесса в целом. Квант, как можно показать с помощью не совсем тривиальных вычислений, бифокально концентрирует магнит.'
class Main extends BaseElement {

    render() {
        return html`
        <section class="hero">
            <div class="hero-body mt-4">
                <div class="container">
                    <div class="columns">
                        <div class="column mt-6">
                            <h1 class="title is-spaced is-size-2">
                                Тема: «Осциллятор как гидродинамический удар»
                            </h1>
                            <h2 class="subtitle is-size-4">
                                ${mainText}
                            </h2>
                        </div>
                        <div class="column">
                            <figure class="image is-square">
                                <img src="./img/main4.svg">
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
