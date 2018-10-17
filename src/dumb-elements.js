import defineDumbElement from './defineDumbElement.js';

import {primaryColor}    from './cssVariables.js';
import {h1Style}         from './cssVariables.js';

// Hello //
defineDumbElement('hello', `
<style>
	div.helloSignature {max-width: 20em; text-align: right;}
	div.helloSignature > appl-signature {height: 7em;}
</style>
<header><slot></slot></header>
<p>
	Dear Reader
</p>
<p>
	This is a demo version of the job application app. I removed
	some information in order to avoid spamming. If you need this
	information, you'll have received it from me, please stick to
	that version.
</p>
<p>
	Otherwise you may be interested in using this for your own job
	applications. Cool! Go ahead, feel free to swap out all the
	content and change it however you like.
</p>
<p>
	If you mention me, the original author of this, in the source
	of your job application I'll feel deeply honored and my belief
	in the good in man will be boosted. Maybe not my belief in the
	cunning of man, though: we all have to face real life, and
	maintaining a mention of me in your job application is not exactly
	ideal. Therefor this application is non-copyrighted, i.e. public
	domain under the <a href="http://unlicense.org/">Unlicense</a>.
	So screw me and get that job/project :-)
</p>
<p>
	Still, I'd obviously love to get improvements back into the source
	of this application. So pretty please, if you improve upon it,
	share it back. My personal tentative plans involve some helper
	tools for quickly generating project applications, or even a UI for
	customizing the whole thing. But whatever you got, please fork it
	and drop me a pull request on
	<a href="https://github.com/schrotie/job-application">GitHub</a>.
</p>
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
	:host {
		position: relative;
	}
	section > div {
		white-space: nowrap;
		max-width: 100%;
	}
	section:first-child > div {
		display: inline-block;
	}
	section > div > label {
		vertical-align: top;
		display: inline-block;
		width: 8em;
	}
	section > div > label + span {
		display: inline-block;
		white-space: normal;
		max-width: calc(100% - 8em);
	}

	section.personalDetails > div {display: inline-block;}

	appl-toggle-class {float: right;}
	appl-toggle-class,
	appl-toggle-class > appl-portrait {
		width: 17em;
		transition: 0.5s;
		cursor: pointer;
		display: block;
	}
	appl-toggle-class.zoom,
	section > appl-toggle-class.zoom > appl-portrait {
		width: 100%;
	}

	${h1Style}

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
<section class="personalDetails">
	<appl-toggle-class data-class="zoom">
		<appl-portrait></appl-portrait>
	</appl-toggle-class>
	<h1>Personal Details</h1>
	<div>
		<label>Address</label>
		<span>
			<div>Street ##</div>
			<div>ZIP City</div>
		</span>
	</div></br>
	<div>
		<label>Family Status</label>
		<span>married, two kids (foo and bar years)</span>
	</div></br>
	<div>
		<label>Born</label>
		<span>1972/10/02</span>
	</div></br>
	<div>
		<label>Place of Birth</label>
		<span>City</span>
	</div>
</section>
<section>
	<h1>School</h1>
	<div><label>1979 - 1983</label><span>Hellingskampschule, Bielefeld</span></div>
	<div><label>1983 - 1984</label><span>Martin Niemöller Gesamtschule, Bielefeld</span></div>
	<div><label>1984 - 1992</label><span>Max Planck Gymnasium, Bielefeld; Graduation: Abitur</span></div>
</section>
<section>
	<h1>Studies</h1>
	<div><label>1992 - 1998</label><span>Studies of Biology at Bielefeld University</span></div>
	<div><label>1998 - 1999</label><span>External diploma thesis at University of Zürich Irchel; Final grade: sehr gut (magna cum laude)</span></div>
	<div><label>1999 - 2006</label><span>PhD graduation at Bielefeld University; Final grade: sehr gut (magna cum laude)</span></div>
</section>
<section>
	<h1>Profession</h1>
	<div><label>1999 - 2006</label><span>Scientific assistant at Bielefeld University</span></div>
	<div><label>2006 - 2013</label><span>Web-Developer at Echelon EDC</span></div>
	<div><label>2013 - 2017</label><span>CTO, co-founder and partner at ARIGO Software</span></div>
	<div><label>2017 - 2018</label><span>Lead developer at QiO technologies</span></div>
	<div><label>2018 - today</label><span>Freelance IT consultant</span></div>
</section>
<section>
	<h1>Languages</h1>
	<div><label>Deutsch</label><span>mother tongue</span></div>
	<div><label>English</label><span>fluent in spoken and written</span></div>
	<div><label>Español</label><span>basic knowledge</span></div>
</section>
<section>
	<h1>Honorary Office</h1>
	<div><label>2004 - 2010 </label><span>CEO of two kindergartens, initiative and supervision of the fusion of these</span></div>
	<div><label>2012 - today</label><span>CEO of a citizen's initiative</span></div>
</section>
<section>
	<h1>Interests</h1>
	<div><label>Music</label><span>Composition, arrangement, vocals, saxophone, rhythm, mixing</span></div>
	<div><label>Writing</label><span>Prose, political, and utopian texts</span></div>
	<div><label>Reading</label><span>Science fiction, philosophy</span></div>
</section>
<section class="signature">
	City, the nth of Month YYYY
	<appl-signature></appl-signature>
</section>
`);

// abi //
defineDumbElement('abi', `
<style>
	:host {
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
	:host {
		display: block;
		width: inherit;
	}
</style>
<appl-diplom1></appl-diplom1>
<appl-diplom2></appl-diplom2>`);

// contact //
defineDumbElement('contact', `
<style>
	address > div:nth-child(3) {margin-bottom: 1em;}
</style>
<address>
	<div>Thorsten Roggendorf</div>
	<div>Street ##</div>
	<div>ZIP City</div>

	<div>Fon: <a href="tel:+49000">+49 000 000000</a></div>
	<div>Mail: <a href="mailto:spam@spam.de">spam@spam.de</a></div>
</address>`);


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
		outline: 2px solid ${primaryColor};
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
defineDumbElement('samples', `
<style>
	div > .smallprint,
	div > .smallprint * {font-size: 0.8em;}
	${h1Style}
</style>
	<h1>This Application</h1>
	<p>
		This web application was written by Thorsten Roggendorf from
		scratch. It was build from vanilla web components.
		The application was then bundled into a self-contained HTML file
		that can be loaded directly into a compatible web browser without
		requiring a web server. It is designed to be fully responsive
		from smart phone to big screens to traditional print / PDF.
	</p>
	<p>
		It does work from a web server without problems, though, as
		demonstrated <a href="https://roggendorf.pro">here</a>.<br/>
		The app's source code can be reviewed
		<a href="https://github.com/schrotie/job-application">here</a>.
	</p>
	<h1>Hotel</h1>
	<p>
		This set of applications was developed for a hotel where staff
		and guests use it to control lights and climate in the rooms.
		It runs on wall mounted tablets and guest smart phones. The
		navigation menu in the top left is not part of the production
		app. It was developed for demonstration purpose. In production
		the different apps run on different addresses / devices.
		A hallmark of this app are the realistic lighting effects in the
		guest rooms. Not everything works in this demo, since it relies
		on data routed through the specific automation network of the
		hotel. Also it was developed for one specific browser, which runs
		on the tablets.<br/>
		Everything is built from web-components, all developed by Thorsten
		Roggendorf. For performance reasons no Polymer components were
		used.<br/>
		Please note that Arigo's UI was a one man show at that point. Upon
		my many responsibilities being a designer was one I do not particularly
		pride myself on. All artwork and image processing, layout, color
		choices ... please bear with me.<br/>
		You can access the demo
		<a href="http://schrotie.de/applApp/hotel.html">here</a>
	</p>
`);

// print //
defineDumbElement('print', `
<style>
	:host {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		background-color: white;
	}
	appl-hello,
	appl-facts,
	appl-life {
		display: block;
	}

	:host .head {
		position: relative;
		height: 15em;
	}
	:host appl-contact {
		position: absolute;
		top: 0;
		right: 0;
	}
	/* Chrome does not support page breaks, this hack should fix it but doesn't:
		html, body, .main, .tabs, .tabbed-content { float: none; }
	*/
	.pageBreak {
		display: block;
		page-break-inside: avoid;
		page-break-after: always;
		position: relative;
	}
	@media print {
		:host > appl-hello,
		:host > appl-facts,
		:host > appl-life
		{page-break-after: always;}
	}
	@page {
		size: 21cm 29.7cm;
		margin: 20mm 20mm 20mm 20mm;
	}
</style>

<appl-hello   name="hello"   class="pageBreak">
	<div class="head">
		<appl-contact name="contact"></appl-contact>
	</div>
</appl-hello>
<appl-facts   name="facts"   class="pageBreak"></appl-facts>
<appl-life    name="life" class="print pageBreak"  ></appl-life>

<appl-abi></appl-abi>
<appl-diplom></appl-diplom>
<appl-promotion></appl-promotion>
<appl-echelon1></appl-echelon1>
<appl-echelon2></appl-echelon2>
`);
