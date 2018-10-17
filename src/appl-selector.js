customElements.define('appl-selector', class extends HTMLElement {
	constructor() {super();}
	connectedCallback() {
		if(this.selected) {
			this.select(this.selected);
			delete this.selected;
		}
		const select = this._select.bind(this);
		this._eachSelector(el => el.addEventListener('click', select));
	}
	set selected(value) {this.select(value);}
	select(name) {
		function unselect(el) {el.classList.remove('selected');}
		this._eachSelected(unselect);
		this._eachSelector(unselect);
		const selected = this.querySelectorAll(
			`[data-selector="${name}"],[data-selected="${name}"]`
		);
		for(let i = 0; i < selected.length; i++) {
			selected[i].classList.add('selected');
		}
	}
	get _selected() {return this.querySelectorAll('[data-selected]');}
	get _selector() {return this.querySelectorAll('[data-selector]');}
	_each(collection, callback) {
		for(var i = 0; i < collection.length; i++) callback(collection[i]);
	}
	_eachSelector(callback) {this._each(this._selector, callback);}
	_eachSelected(callback) {this._each(this._selected, callback);}

	_select(evt) {this.select(evt.currentTarget.getAttribute('data-selector'));}
});
