import {createElement} from '../render.js';
import {createEditTemplate} from '../template/edit-template.js';

export default class EditView {
  getTemplate() {
    return createEditTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
