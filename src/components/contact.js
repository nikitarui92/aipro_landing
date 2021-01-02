import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'
import styles from './contact.scss'

class Contact extends BaseElement {

    static get styles() {
        return [
            unsafeCSS(styles.toString())
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
                        <div class="column">
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-content">
                                            <p class="title is-4">Никита Захаров</p>
                                            <p class="subtitle is-6">@nikitarui</p>
                                        </div>
                                    </div>
        
                                    <div class="content">
                                        Гомогенная среда стабилизирует гидродинамический удар даже в случае сильных
                                        локальных
                                        возмущений среды.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column"></div>
                        <div class="column"></div>
                        <div class="column"></div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-contact', Contact);
