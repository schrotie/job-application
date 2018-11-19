export default `
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
	<h1>ShadowQuery</h1>
	<p>
		<a href="https://github.com/schrotie/shadow-query">ShadowQuery</a>
		is a micro-library for writing high performance vanilla web components.
		At a tiny footprint of just 2k it allows developers to create
		great performing web applications using only a few helpers that come in
		an established API syntax that most web developers know - and the
		features of the modern web platform.
	</p>
	<p>
		It ships with a demonstration of the commonly used dbmonster benchmark.
		The whole demo including ShadowQuery is below 10K, has only 100 lines
		of well structured code plus templates and outperforms 95+% of the
		<a href="https://mathieuancelin.github.io/js-repaint-perfs/">dbmonster
		repaint challenge</a> - including all major frameworks - with regards to
		render velocity and memory consumption.
	</p>
	<p>
		This is achieved by a
		<a href="https://blog.roggendorf.pro/2018/11/17/the-perfect-web-application-framework/">revolutionary</a>
		out of the box thinking approach to
		<a href="https://blog.roggendorf.pro/2018/11/19/native-web-application-tutorial/">modern app development</a>
		that does away with certain development patterns, that I increasingly
		<a href="https://blog.roggendorf.pro/2018/11/15/web-platform-to-the-rescue/">come to doubt</a>.
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
`;
