class View extends HTMLElement {
  render() {
    this.innerHTML = this.createHtml();
  }

  createHtml() {
    return '';
  }
}

export default View;
