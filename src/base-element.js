import { LitElement, css, unsafeCSS } from 'lit-element';

export class BaseElement extends LitElement {

    createRenderRoot() {
        return this;
    }

}
