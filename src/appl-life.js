import cv from './content/cv.js';
const template = `<style>
	#applLifeWrapper {
		position: relative;
	}
	#applLifeWrapper > div {
		white-space: nowrap;
		max-width: 100%;
		position: relative;
	}
	#applLifeWrapper > div.hint {
		white-space: normal;
		margin-right: 3rem;
	}
	#applLifeWrapper > div ~ div {
		margin-top: 1em;
	}
	#applLifeWrapper > div > label {
		vertical-align: top;
		display: inline-block;
		width: 5em;
		font-weight: bold;
	}

	#applLifeWrapper > div > label + span {
		display: inline-block;
		white-space: normal;
		max-width: calc(100% - 5em);
	}
	#applLifeWrapper > div > span > div {margin-bottom: 0.5em;}
	#applLifeWrapper > div > span span.emphasis {font-style: italic;}


	@media screen and (max-width: 640px) {
		#applLifeWrapper > div > label {
			display: block;
		}
		#applLifeWrapper > div > label + span {
			max-width: 100%;
		}
	}

	#applLifeWrapper > div.hint    {display: none;}
	#applLifeWrapper.filtered > div.hint    {display: block;}
	#applLifeWrapper.filtered > div         {display: flex;}
	#applLifeWrapper.filtered > div > label {flex: 0 0 5em;}
	#applLifeWrapper.filtered > div.empty   {display: none;}
	#applLifeWrapper.filtered > div > span  {font-size: 0;}
	#applLifeWrapper.filtered > div .context{font-size: initial;}
	#applLifeWrapper > div > span h4,
	#applLifeWrapper.filtered > div > span h4 {
		margin: 0;
		font-size: 1rem;
	}
	#applLifeWrapper.filtered > div > span span.emphasis {
		font-size: initial;
		font-style: normal;
		cursor: pointer;
	}
	#applLifeWrapper.filtered > div > span span.emphasis.toggled {
		font-weight: bold;
	}
	#applLifeWrapper.filtered > div > span span.emphasis:after {
		content: ", ";
		font-size: initial;
	}
	#applLifeWrapper.filtered > div .context span.emphasis:after {
		content: "";
	}
	#applLifeWrapper.filtered > div > span span.emphasis.join:after {
		content: " ";
		font-size: initial;
	}
	#applLifeWrapper.filtered > div > span span.emphasis:last-of-type:after {
		content: "";
	}


	#applLifeWrapper > span {
		display: inline-block;
		position: absolute;
		top: 5px;
		right: 5px;
		z-index: 1;
	}

	@media print {
		#applLifeWrapper > span {display: none;}
		#applLifeWrapper > span,
		#applLifeWrapper.filtered > .hint {
			display: none;
		}
		#applLifeWrapper.filtered > div.empty   {display: block;}
		#applLifeWrapper.filtered > div         {display: block;}
		#applLifeWrapper.filtered > div > label {flex: 0 0 5em;}
		#applLifeWrapper.filtered > div > span  {font-size: initial;}
		#applLifeWrapper.filtered > div > span span.emphasis {
			font-style: italic;
			cursor: text;
		}
		#applLifeWrapper.filtered > div > span span.emphasis:after {content: "";}
		#applLifeWrapper.filtered > div > span span.emphasis.join:after {
			content: "";
		}
	}
</style>
<div id="applLifeWrapper">
	<span id="filter">
		<appl-button data-icon="filter" data-shadow="true"></appl-button>
	</span>
	<div class="hint">
		Click/tap qualification to toggle context. Click filter button to
		toggle full text.
	</div>
${cv}
</div>`;


// classList.toggle not available on IE
function applToggleClass(element, className, bool) {
	if(!element) return;
	var clas = element.className.split(' ');
	var idx = clas.indexOf(className);
	if(arguments.length == 2) bool = idx === -1;
	if((idx !== -1) && bool) return;
	if(bool) clas.push(className);
	else clas.splice(idx, 1);
	element.className = clas.join(' ');
}

customElements.define('appl-life', class extends HTMLElement {
	static get is() {return 'appl-life';}
	constructor() {super();}
	connectedCallback() {
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = template;
		this._shadowRoot.querySelector('#filter')
		.addEventListener('click', this._filter.bind(this));
		this._filter();
		const context = this._context.bind(this);
		const emphasis = this._shadowRoot.querySelectorAll('.emphasis');
		for(let i = 0; i < emphasis.length; i++) {
			emphasis[i].addEventListener('click', context);
		}
	}
	_filter() {
		this._filtered = !this.filtered;
		applToggleClass(
			this.shadowRoot.querySelector('#applLifeWrapper'),
			'filtered'
		);
	}
	_context(evt) {
		if(!this._filtered || /print/.test(this.className)) return;
		var revert = evt.target.className.match(/toggled/);
		applToggleClass(this.shadowRoot.querySelector('.context'), 'context');
		applToggleClass(this.shadowRoot.querySelector('.toggled'), 'toggled');
		if(revert) return;
		applToggleClass(evt.target, 'toggled');
		applToggleClass(evt.target.parentElement, 'context');
	}
});
