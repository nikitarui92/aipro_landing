import { LitElement, css, unsafeCSS } from 'lit-element';
import styleAsString from './styles.scss';

export class BaseElement extends LitElement {

    static get styles() {
        return [
            unsafeCSS(styleAsString.toString())
        ]
    }

}
