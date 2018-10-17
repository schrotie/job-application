import {primaryColor}   from './cssVariables.js';
import {secondaryColor} from './cssVariables.js';
import {z1shadow}       from './cssVariables.js';
import {z2shadow}       from './cssVariables.js';

const path = {
	arrowBack: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
	menu: `m 0,12 18,0 0,-2 -18,0 0,2 z m 0,-5 18,0 0,-2 -18,0 0,2 z m 0,-7\
		0,2 18,0 0,-2 -18,0 z`,
	chevronRight: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
	filter: `m 10.471305,19.819878 0,-6.6881 -9.4662934,-12.61170036\
		21.9394724,0 -9.433,12.61170036 0,6.6881 z`,
	close: `M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59\
		6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`,
	plus: `m 10.221407,0.29475413 c -1.1010578,0 -1.9874653,0.88640937\
		-1.9874653,1.98746817 l 0,5.9582835 -5.9582886,0 c -1.1010554,0\
		-1.98746527,0.8864127 -1.98746527,1.9874662 l 0,3.564045 c 0,1.101056\
		0.88640987,1.987472 1.98746527,1.987472 l 5.9582886,0 0,5.958283\
		c 0,1.101053 0.8864075,1.987472 1.9874653,1.987472 l 3.564041,0\
		c 1.101058,0 1.987465,-0.886419 1.987465,-1.987472 l 0,-5.958283\
		5.958289,0 c 1.101057,0 1.987474,-0.886416 1.987474,-1.987472 l\
		0,-3.564045 c 0,-1.1010535 -0.886417,-1.9874662 -1.987474,-1.9874662\
		l -5.958289,0 0,-5.9582835 c 0,-1.1010588 -0.886407,-1.98746817\
		-1.987465,-1.98746817 l -3.564041,0 z`,
};

const noHoverShadow = `box-shadow: ${z1shadow};`;
const hoverShadow = `#applButtonWrapper:hover {box-shadow: ${z2shadow};}`;

function template(icon, shadow) {return `
	<style>
#applButtonWrapper {
	cursor: pointer;
	width:  40px;
	height: 40px;
	border-radius: 50%;
	background-color: ${primaryColor};
	display: flex;
	justify-content: center;
	align-items: center;
	${shadow ? noHoverShadow : ''}
}
${shadow ? hoverShadow : ''}
svg {
	width:  20px;
	height: 20px;
}
path {fill: ${secondaryColor};}
	</style>
	<div id="applButtonWrapper"><svg><path d="${path[icon]}"</svg></div>
`;}
customElements.define('appl-button', class extends HTMLElement {
	constructor() {super();}
	connectedCallback() {
		this._shadowRoot = this.attachShadow({mode: 'open'});
		this._shadowRoot.innerHTML = template(
			this.getAttribute('data-icon'), this.hasAttribute('data-shadow')
		);
		const svg = this._shadowRoot.querySelector('svg');
		const path = svg.querySelector('path');
		const box = path.getBoundingClientRect();
		svg.style.width  = `${box.width + 1}px`;
		svg.style.height = `${box.height+ 1}px`;
	}
});
