import { LitElement, css, unsafeCSS } from 'lit-element';
import styles from './base-element.scss';

export class BaseElement extends LitElement {

    static get styles() {
        return [
            unsafeCSS(styles.toString())
        ]
    }

}
