export default function defineDumbElement(tag, template) {
	customElements.define(`appl-${tag}`, class extends HTMLElement {
		constructor() {super();}
		connectedCallback() {
			this.attachShadow({mode: 'open'}).innerHTML = template;
		}
	});
}
