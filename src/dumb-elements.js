// util
import defineDumbElement from './defineDumbElement.js';

// content
import hello from './content/hello.js';
import facts from './content/facts.js';
import contact from './content/contact.js';
import samples from './content/samples.js';

// Hello //
defineDumbElement('hello', `
<style>
	div.helloSignature {max-width: 20em; text-align: right;}
	div.helloSignature > appl-signature {height: 7em;}
</style>
${hello}
<div class="helloSignature"><appl-signature></appl-signature></div>
`);


// Facts //
customElements.define('appl-toggle-class', class extends HTMLElement {
	constructor() {super();}
	connectedCallback() {
		this.addEventListener(
			'click',
			() => this.classList.toggle(this.getAttribute('data-class'))
		);
	}
});

defineDumbElement('facts', `
<style>
	appl-facts {
		position: relative;
	}
	appl-facts h1 {
		margin: 1rem 0.3rem 0 0;
	}
	appl-toggle-class > div > div,
	section > div {
		white-space: nowrap;
		max-width: 100%;
	}
	appl-toggle-class > div > div > label,
	section > div > label {
		vertical-align: top;
		display: inline-block;
		width: 8em;
	}
	appl-toggle-class > div > div > label + span,
	section > div > label + span {
		display: inline-block;
		white-space: normal;
		max-width: calc(100% - 8em);
	}

	appl-toggle-class {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}
	appl-toggle-class.zoom {
		flex-direction: column;
	}
	appl-toggle-class > appl-portrait {
		width: 17em;
		transition: 0.5s;
		cursor: pointer;
		display: block;
	}
	appl-toggle-class.zoom > appl-portrait {
		width: 100%;
	}
	@media screen and (max-width: 800px) {
		appl-toggle-class {
			flex-direction: column;
		}
		appl-toggle-class,
		appl-toggle-class > appl-portrait {
			width: 100%;
		}
	}

	@media screen and (min-width: 400px) {
		section.signature {
			margin: 3em 0 0 8em;
		}
	}
	@media screen and (max-width: 400px) {
		section.signature {
			margin: 3em 0 0 1em;
		}
	}

	section.signature > appl-signature {
		width: 15em;
		display: inline-block;
		margin-left: 3em;
		vertical-align: middle;
	}
</style>
${facts}
`);

// abi //
defineDumbElement('abi', `
<style>
	appl-abi {
		display: block;
		width: inherit;
	}
</style>
<appl-abi1></appl-abi1>
<appl-abi2></appl-abi2>
<appl-abi3></appl-abi3>
<appl-abi4></appl-abi4>`);

// diplom //
defineDumbElement('diplom', `
<style>
	appl-diplom {
		display: block;
		width: inherit;
	}
</style>
<appl-diplom1></appl-diplom1>
<appl-diplom2></appl-diplom2>`);

// contact //
defineDumbElement('contact', `
<style>address > div:nth-child(3) {margin-bottom: 1em;}</style>
<address>${contact}</address>`);


// cert //
defineDumbElement('cert', `
<style>
	#certSelector {
		position: relative;
		padding-top: 150px;
		display: block;
	}
	#certSelector > #selector {
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding: 2px;
		overflow-x: auto;
		position: absolute;
		top: 16px;
		left: 16px;
		right: 16px;
	}
	#certSelector:before {
		content: "\\2190";
		left: 1px;
	}
	#certSelector:after {
		content: "\\2192";
		right: 1px;
	}
	#certSelector:before,
	#certSelector:after {
		position: absolute;
		top: 75px;
		opacity: 0.5;
	}
	#certSelector > #selector > div  {flex-shrink: 0;}
	#certSelector > #selector > div > div {white-space: nowrap;}
	#certSelector > #selector > div > div + * {
		cursor: pointer;
		padding: 1px;
		width: 4em;
	}
	#certSelector > #selector > div.selected {
		outline: 2px solid var(--primary-color);
	}
	#certSelector > #selector > div > div {text-align: center;}
	#certSelector > #selector + div {margin-top: 1em;}
	#certSelector > #page > * {width: 100%; display: none;}
	#certSelector > #page > *.selected {display: block;}
</style>
<appl-selector id="certSelector">
	<div id="selector">
		<div data-selector="abi1"     ><div>Abitur  1</div><appl-abi1     ></appl-abi1></div>
		<div data-selector="abi2"     ><div>Abitur  2</div><appl-abi2     ></appl-abi2></div>
		<div data-selector="abi3"     ><div>Abitur  3</div><appl-abi3     ></appl-abi3></div>
		<div data-selector="abi4"     ><div>Abitur  4</div><appl-abi4     ></appl-abi4></div>
		<div data-selector="diplom1"  ><div>Diploma 1</div><appl-diplom1  ></appl-diplom1></div>
		<div data-selector="diplom2"  ><div>Diploma 2</div><appl-diplom2  ></appl-diplom2></div>
		<div data-selector="promotion"><div>PhD      </div><appl-promotion></appl-promotion></div>
		<div data-selector="echelon1" ><div>Echelon 1</div><appl-echelon1 ></appl-echelon1></div>
		<div data-selector="echelon2" ><div>Echelon 2</div><appl-echelon2 ></appl-echelon2></div>
	</div>
	<div>Select above to display or <a href="http://schrotie.de/applApp/zeugnisse.pdf">download high-res scans</a>.</div>
	<div id="page">
		<appl-abi1      data-selected="abi1"     ></appl-abi1>
		<appl-abi2      data-selected="abi2"     ></appl-abi2>
		<appl-abi3      data-selected="abi3"     ></appl-abi3>
		<appl-abi4      data-selected="abi4"     ></appl-abi4>
		<appl-diplom1   data-selected="diplom1"  ></appl-diplom1>
		<appl-diplom2   data-selected="diplom2"  ></appl-diplom2>
		<appl-promotion data-selected="promotion"></appl-promotion>
		<appl-echelon1  data-selected="echelon1" ></appl-echelon1>
		<appl-echelon2  data-selected="echelon2" ></appl-echelon2>
	</div>
</appl-selector>`);


// samples //
defineDumbElement('samples', samples);

// print //
defineDumbElement('print', `
<style>
	appl-print {
		display: block;
		position: relative;
		background-color: white;
		page-break-inside: auto;
		break-inside: auto;
	}

	appl-print .head {
		position: relative;
		height: 15em;
	}
	appl-print appl-contact {
		position: absolute;
		top: 0;
		right: 0;
	}

	/* Chrome does not support page breaks, this hack should fix it but doesn't:
		html, body, .main, .tabs, .tabbed-content { float: none; }
	*/
	@media print {
		appl-print {
			min-height: initial;
			page-break-inside: auto;
			break-inside: auto;
		}
		appl-print > h1 {
			page-break-before: always;
		}

		appl-print .pageBreak,
		appl-print appl-samples ~ * > style ~ * {
			position: relative;
			display: block;
			page-break-after: always;
			break-after: page;
		}
		appl-print appl-samples ~ * > style ~ * {
			width: 100%;
			height: 100%;
		}
		@page * {
			size: 21cm 29.7cm;
			margin: 20mm 20mm 20mm 20mm;
		}
	}
</style>

<appl-hello   class="pageBreak">
	<header><div class="head">
		<appl-contact></appl-contact>
	</div></header>
</appl-hello>

<appl-facts   class="pageBreak"></appl-facts>

<h1>Professional Experience</h1>
<appl-life    class="pageBreak print"></appl-life>

<h1>Work Samples</h1>
<appl-samples class="pageBreak"></appl-samples>

<appl-abi class="pageBreak"></appl-abi>
<appl-diplom></appl-diplom>
<appl-promotion></appl-promotion>
<appl-echelon1></appl-echelon1>
<appl-echelon2></appl-echelon2>
`);
