export let primaryColor   = '#e0ff6a';
export let secondaryColor = '#840021';
export let z1shadow       = `0 2px 2px 0 ${alpha(14)}, 0 1px 5px 0 ${alpha(12)}, 0 3px 1px -2px ${alpha(2)}`;
export let z2shadow       = `0 3px 4px 0 ${alpha(14)}, 0 1px 8px 0 ${alpha(12)}, 0 3px 3px -2px ${alpha(2)}`;
export let h1Style        = `h1 {
	margin: 0.5em 0 0.1em 0;
	color: #212121;
	font-size: 22px;
}`;

function alpha(a) {return `rgba(0, 0, 0, 0.${a})`;}
