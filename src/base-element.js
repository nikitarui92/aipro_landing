import { LitElement, css, unsafeCSS } from 'lit-element';
import styleAsString from './base-styles.scss';

export class BaseElement extends LitElement {

    static get styles() {
        return [
            unsafeCSS(styleAsString.toString())
        ]
    }

}
