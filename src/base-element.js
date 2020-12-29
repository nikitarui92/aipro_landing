import { LitElement } from 'lit-element';
import {bulmaStyles} from '@granite-elements/granite-lit-bulma/granite-lit-bulma.js';

export class BaseElement extends LitElement {

    static get styles() {
        return [bulmaStyles]
    }

}
