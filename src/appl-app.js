import '../node_modules/@webcomponents/custom-elements/src/custom-elements.js';
import cssVars from '../node_modules/css-vars-ponyfill/dist/css-vars-ponyfill.esm.js';

import './appl-button.js';
import './content/appl-images.js';
import './appl-life.js';
import './appl-selector.js';
import './dumb-elements.js';

const template = `
<style>
	#applAppWrapper       appl-print    {display: none;}
	#applAppWrapper.print appl-print    {display: block;}
	#applAppWrapper.print appl-selector {display: none;}

	#applAppWrapper > appl-selector {
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
	}

	#applAppWrapper #menu {
		padding: 0 1em;
		z-index:3;
		background-color: white;
		overflow-x: hidden;
		overflow-y: auto;
		height: 100%;
		width: 9em;
		flex: 0 0 9em;
		transition: 0.5s;
	}
	#applAppWrapper #header {left: 11em; transition: 0.5s;}
	@media screen and (max-width: 640px) {
		#applAppWrapper #menu {
			width: 0;
			flex: 0 0 0;
			padding: 0;
		}
		#applAppWrapper #header {left: 0;}

		#applAppWrapper.showMenu #menu {
			width: 9em;
			flex: 0 0 9em;
			padding: 0 1em;
		}
		#applAppWrapper.showMenu #header {left: 11em;}
	}
	#applAppWrapper #menu h3 {
		height: 4em;
		display: flex;
		align-items: center;
		margin: 0;
	}

	#applAppWrapper #menu a {
		display: block;
		text-decoration: none;
		color: var(--primary-color);
		opacity: 0.5;
		line-height: 40px;
		transition: 0.5s;
	}

	#applAppWrapper #menu a.selected {
		opacity: 1;
		font-weight: bold;
	}

	#applAppWrapper #main {
		position: relative;
		padding-top: 4em;
		flex: 1 1 auto;
		height: 100%;
		overflow-y: auto;
	}

	#applAppWrapper #header {
		position: fixed;
		z-index:2;
		top: 0;
		height: 4em;
		width: 100%;
		display: flex;
		align-items: center;
		background-color: var(--secondary-color);
		color: var(--primary-color);
		font-weight: bold;
		/*@apply(--shadow-elevation-3dp);*/
		box-shadow: var(--z2-shadow);
	}
	#applAppWrapper.hideHeader #header {
		top: -4.1em;
	}
	@media screen and (min-width: 641px) {
		#applAppWrapper #header > appl-button {position: absolute; top: -1000px;}
	}
	#applAppWrapper #title {
		font-size: 1.3em;
		margin-left: 1em;
		color: var(--primary-color);
	}

	#applAppWrapper app-header-layout div {position: relative;}
	.card > * {
		/*transition: opacity 0.5s, display 0s 0s;
		display: none;*/
		transition: height 0.5s;
		opacity: 0;
		position: absolute;
		top:0;
		left: 0;
		min-width: 100%;
		height: 0;
		overflow: hidden;
	}
	.card > *.selected {
		transition: opacity 0.9s, display 0s 0.5s;
		height: auto;
		z-index: 1;
		opacity: 1;
		display: block;
		position: static;
	}

	.card {
		display: block;
		padding: 16px;
		color: #333;
		border-radius: 5px;
		background-color: #fff;
		max-width: 21cm;
		margin-bottom: 4em;
	}
	@media screen and (min-width: 450px) {
		.card {
			margin: 24px;
			margin-bottom: 5em;
			box-shadow: var(--z1-shadow);
		}
	}

</style>
<div id="applAppWrapper">
	<appl-selector>
		<section id="menu">
			<h3>Contents</h3>
			<a data-selector="hello"   href="#hello"  >Hello</a>
			<a data-selector="facts"   href="#facts"  >Fact Sheet</a>
			<a data-selector="life"    href="#life"   >Professional</a>
			<a data-selector="cert"    href="#cert"   >Certificates</a>
			<a data-selector="samples" href="#samples">Work Samples</a>
			<a data-selector="contact" href="#contact">Contact</a>
			<a data-selector="print"   href="#print"  >Print</a>
		</section>

		<!-- Main content -->
		<section id="main">
			<section id="header">
				<appl-button data-icon="menu"></appl-button>
				<div id="title">Thorsten Roggendorf</div>
			</section>
			<section id="content" class="card">
				<appl-hello   data-selected="hello"  ></appl-hello>
				<appl-facts   data-selected="facts"  ></appl-facts>
				<appl-life    data-selected="life"   ></appl-life>
				<appl-cert    data-selected="cert"   ></appl-cert>
				<appl-samples data-selected="samples"></appl-samples>
				<appl-contact data-selected="contact"></appl-contact>
			</section>
		</section>
	</appl-selector>
	<appl-print id="print"></appl-print>
</div>
`;

let queued;
function queuePrint() {
	if(queued) return;
	queued = true;
	setTimeout(function() {
		queued = false;
		window.print();
	}, 100);
}

customElements.define('appl-app', class extends HTMLElement {
	constructor() {super();}
	connectedCallback() {
		this.innerHTML = template;
		this._wrapper = this.querySelector('#applAppWrapper');
		this.querySelector('appl-button')
		.addEventListener('click', this._toggleMenu.bind(this));
		this.addEventListener('click', this._hideMenu.bind(this));
		this.querySelector('#main')
		.addEventListener('scroll', this._scroll.bind(this));
		const link = this.querySelectorAll('a');
		const onNav = () => setTimeout(this._pageChanged.bind(this));
		for(let i = 0; i < link.length; i++) {
			link[i].addEventListener('click', onNav);
		}
		window.addEventListener('popstate', onNav);
		this._pageChanged();
	}
	_pageChanged() {
		const page = (location.hash && location.hash.replace('#', '')) || 'hello';
		this._select(page);
		this.querySelector('#main').scrollTop = 0;
		if(page == 'print') {
			this._wrapper.classList.add('print');
			queuePrint();
		}
		else this._wrapper.classList.remove('print');
	}
	_select(page) {
		const selector = this.querySelector('appl-selector');
		if(selector) selector.selected = page;
	}
	_scroll(evt) {
		const scroll = evt.target.scrollTop;
		if(scroll > (this._lastScroll || 0)) {
			this._wrapper.classList.add('hideHeader');
		}
		else this._wrapper.classList.remove('hideHeader');
		this._lastScroll = scroll;
	}
	_toggleMenu(evt) {
		evt.stopPropagation();
		this._wrapper.classList.toggle('showMenu');
	}
	_hideMenu(evt) {
		this._wrapper.classList.remove('showMenu');
	}
});

cssVars();
