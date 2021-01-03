import { html, unsafeCSS } from 'lit-element';

import { BaseElement } from '../base-element'
import styles from './contact.scss'

import './card'

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
                            <l-card img="./img/max-card.jpg"></l-card>
                        </div>
                        <div class="column">
                            <l-card img="./img/niki-card.jpg"></l-card>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    `;
    }

}

customElements.define('l-contact', Contact);
