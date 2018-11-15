(function() {
if(!supported()) notSupported();

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
