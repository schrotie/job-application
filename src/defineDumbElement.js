export default function defineDumbElement(tag, template) {
	customElements.define(`appl-${tag}`, class extends HTMLElement {
		constructor() {super();}
		connectedCallback() {this.innerHTML += template;}
	});
}
