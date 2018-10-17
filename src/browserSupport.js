(function() {
if(!supported()) notSupported();

window.applCss = new (class {
	constructor() {
		this.primaryColor   = '#e0ff6a';
		this.secondaryColor = '#840021';
		this.z1shadow = '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)';
		this.z2shadow = '0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4)';
	}
});

function supported() {
	try {eval(
			'const foo = class extends HTMLElement {constructor() {super(`${1+1}`)}}'
			);} catch(e) {return false;}
	return true;
}

function notSupported() {
	document.addEventListener('DOMContentLoaded', function() {
		document.body.innerHTML = '<style>'                                     +
'body {'                                                             +
'	display: flex;'                                                   +
'	align-items: center;'                                             +
'  justify-content: center;'                                         +
'	padding: 0 1em;'                                                  +
'}'                                                                  +
'div {max-width: 30em;}'                                             +
'</style><div>'                                                      +
		'<h1>Not supported</h1><p>'                                          +
		'Sorry, this web application does not support your browser.</p><p>'  +
		'Please open it with any modern browser - should work with almost '  +
		'any up to date or, depending on the browser family, even older '    +
		'version of anything but IE and Opera mini.</p><p>'                  +
		'Alternatively please open the (generic) PDF print-out of this '     +
		'application '                                                       +
		'<a href="https://roggendorf.pro/drThorstenRoggendorf.pdf">here</a>.'+
		'</p><p>I\'m sorry for the inconvenience<br/>Thorsten Roggendorf</p>'+
		'</div>';
	});
}
})();
