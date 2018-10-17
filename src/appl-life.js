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
	<div class="empty">
		<label>1972</label>
		<span><h4>Hello world!</h4></span>
	</div>
	<div class="empty">
		<label>1977</label>
		<span>
			Little me, aged five, wanted to be a wildlife cameraman.
			In spite of my apparent stubbornness I slightly corrected
			that career aspiration to behavioral biologist a few years
			later.
		</span>
	</div>
	<div>
		<label>1992 ...</label>
		<span>
			<h4>Student</h4>
			When I finally grew up to that goal I found that the great
			names of that field had grown, too, i.e. tired of waiting for
			me; and died - and left their field somewhat deserted. What
			ultimately drove me was a keen desire to understand what makes
			us act the way we do. And finding no fulfillment in sticking
			electrodes into life stock brains I chose a then somewhat
			obscure path in that endeavor: simulating behavioral models.
			Which taught me programming
			<span class="emphasis">C and C++</span>
			besides other things.
		</span>
	</div>
	<div>
		<label>1999 ...</label>
		<span>
			<h4>Scientific assistant at Bielefeld University</h4>
			Many lines of code and a couple of books later I
			<span class="emphasis">taught C++</span>
			to other biologists. I discovered my enthusiasm for
			<span class="emphasis">agile methodologies</span>,
			then in its incarnation of Extreme Programming.
			However, I had to escape the lone ranger mentality of academia
			first, and then the waterfall world of traditional software
			development before I could start living by that ideal. Instead
			I did lots of coding on my own, learning to
			<span class="emphasis join">administer Linux</span>
			as desktop, server and <span class="emphasis">cluster</span>,
			honed my skills of <span class="emphasis">presenting</span>
			complex subject matters, deep
			<span class="emphasis">analytical thinking</span> and
			<span class="emphasis">tutoring</span>. On the
			academic branch I researched
			<span class="emphasis">neural networks</span>.
		</span>
	</div>
	<div class="empty">
		<label>2006</label>
		<span>
			I never really wanted to make home in ivory tower. Having
			satisfied my hunger for that particular kind of knowledge as
			thoroughly as the field afforded at that time I decided to
			move on.
		</span>
	</div>
	<div>
		<label>2006 ...</label>
		<span>
			<h4>Web-Developer at Echelon EDC</h4>
			Echelon, my first employer in business, called their chips
			"Neurons". I doubt they did it to attract biologists, but they
			got me anyway. I was lucky to work for a progressive boss
			who did <span class="emphasis">AJAX</span>
			before it got that name. My occupation introduced me to all the
			long since forgotten buzzwords of the day -
			<span class="emphasis">JavaScript</span>,
			<span class="emphasis">XML</span>
			and all its derivatives in
			<span class="emphasis">web technology</span>,
			<span class="emphasis">service oriented
			architecture</span>
			and all that is dear to it. I learned a lot about making pieces
			of software talk via
			<span class="emphasis">HTTP</span>,
			<span class="emphasis join">designing</span>
			their
			<span class="emphasis">language</span> and
			<span class="emphasis">communication patterns</span>
			- to the point where I became a
			<span class="emphasis join">member of</span>
			some
			<span class="emphasis">OASIS technical
			committee</span> - building
			<span class="emphasis">user interfaces</span>,
			ample
			<span class="emphasis">jQuery</span>, and
			<span class="emphasis join">managed</span>
			my first
			<span class="emphasis">projects</span>.
		</span>
	</div>
	<div>
		<label>2013 ...</label>
		<span>
			<h4>CTO, co-founder and partner at ARIGO Software</h4>
			<div>
			Echelon closed many offices around the world, mine among those.
			My boss, five core developers, and I decided to build a new
			company, Arigo, upon what we had learned. I created what would
			become the kernel of Arigo's software from scratch, developing
			<span class="emphasis">full stack</span>. I
			initiated, chaired, and guided the creation of Arigo's
			<span class="emphasis">test driven</span>
			<span class="emphasis">agile development</span>
			process and trained our developers in the new technologies we
			were to
			employ: <span class="emphasis">Nodejs</span>,
			<span class="emphasis">JSON</span>,
			<span class="emphasis">REST</span>,
			<span class="emphasis">web-sockets</span>,
			<span class="emphasis">mocha</span>,
			<span class="emphasis">selenium</span> - the
			stack of the modern web.
			</div>
			<div>
			Much of Arigo's success relies on bringing that stack down into
			the embedded hardware world. Our business niche was mostly in the
			middle layer between specific embedded devices and their
			plethora of obscure protocols on the one hand and the cloud on
			the other. We build web application from our platform mostly
			for Raspberry Pi league devices but some of our trustiest
			customers run enterprise systems in the cloud where we connect
			the embedded world to
			<span class="emphasis">SQL</span>
			data bases of a couple of dozen gigabytes and do
			<span class="emphasis">load balancing</span>
			for handling concurrent data queries.
			</div>
			<div>
			The first version of Arigo's UI framework was built upon
			<span class="emphasis">jQuery</span>.
			I did some work on
			<span class="emphasis">server side UI</span>
			using Node.js'
			<span class="emphasis">Express</span>,
			and some of its template engines but found that approach
			inappropriate for Arigo's needs, which are much better covered
			by <span class="emphasis">client side UI</span>.
			For the evaluation of the next version I experimented with
			<span class="emphasis">Angular</span>,
			<span class="emphasis">Angular 2</span>, and
			<span class="emphasis">TypeScript</span>,
			but ultimately decided to use
			<span class="emphasis">web components</span>,
			powered by Google's
			<span class="emphasis">Polymer</span> and
			implemented in
			<span class="emphasis">object orientated JavaScript</span>,
			i.e.
			<span class="emphasis">EcmaScript 6/2015</span>.
			This was a huge relief after I had used my own object orientated
			JavaScript idiom at Echelon and jQuery UI's class system at
			Arigo - both are terribly clumsy compared to the built in
			elegance of EcmaScript 2015.
			</div>
			<div>
			As Arigo's CTO I managed the ongoing development, the people and
			the broad software architecture, worked with customers to
			understand their needs, discuss with our developers to figure
			out how to translate these needs into technology, estimate costs
			and keep one eye on the business side of our technology, the
			other on the future of our platform.
			</div>
			<div>
			My management style is decidedly non authoritarian. I work
			with grown up professionals and management is a service
			profession that facilitates developers getting their job done.
			My self perception is that of a mountain guide rather than a
			general, and I firmly believe this is the only way it can work
			with a distributed work force. People need to be aware
			of the consequences of their actions, but an iron fist a couple
			of hundred kilometers away would only weigh down him who raises
			it.
			</div>
			<div>
			Doubling as Arigo's single UI developer which took some 80% of
			my time, taught me to be very efficient in my communication. The
			specific combination of personalities in our company forced me
			to become a deescalation specialist or face the number one
			nemesis of start-ups: failure of communication. The former it
			was.
			</div>
	</div>
	<div class="empty">
		<label>2017</label>
		<span>
			Arigo is now a profitable endeavor with faithful customers.
			The really interesting stuff in IoT happens in scalable cloud
			deployments, not on the Pi - or rather the Pi-device-class may
			be the magic wand, but the magician enacts his tricks from high
			up in the cloud. So I moved to the cloud myself ...
		</span>
	</div>
	<div>
		<label>2017 ...</label>
		<span>
			<h4>Lead developer at QiO technologies</h4>
			<div>
			... working remotely for QiO, an utterly distributed company,
			developing <span class="emphasis">enterprise
			grade scalable cloud IoT solutions</span> for big business
			customers. I hit the ground running, meeting the customer on my
			first day after induction training and started planning the
			project with my new distributed team.
			</div>
			<div>
			We employed
			<span class="emphasis">Docker</span>,
			<span class="emphasis">Kubernetes</span>, and
			<span class="emphasis">Mongo DB</span>,
			utilizing
			<span class="emphasis">GitLab</span>,
			<span class="emphasis">Artifactory</span> and
			<span class="emphasis">Jenkins</span> to
			power our
			<span class="emphasis">continuous integration
			pipeline</span>. Over a couple of months of
			<span class="emphasis">test driven</span>
			<span class="emphasis">Scrum</span>
			development we delivered a system that is now entering
			production with the next major version being planned by me and a
			new team as of now. While developing the UI mostly by myself,
			again using Google's Polymer
			<span class="emphasis">web-component</span>
			framework, I laid the foundations for a themable, localizable
			UI framework to be reused in productization of the project.
			</div>
		</span>
	</div>
	<div>
		<label>2018</label>
		<span>
			<h4>Freelance IT consultant</h4>
			Having long considered - and on the side: tried - freelancing,
			I finally decided to go all in.
		</span>
	</div>
	<div>
		<label>2018</label>
		<span>
			<h4>Page-speed consultant at C&amp;A</h4>
			C&amp;A is one of the top German textile companies. My job was
			to make their online shop load faster. I performed a deep
			<span class="emphasis">page load analysis</span>
			including features and behavior of the
			<span class="emphasis">CDN</span>
			and documented my findings and proposed measures. Then I
			collaborated with the marketing,
			<span class="emphasis">tracking</span>-,
			<span class="emphasis">monitoring</span>-, and
			development-teams on how to implement the measures. I worked with
			<span class="emphasis">grafana</span> to
			measure the results of the improvements and implemented a custom
			<span class="emphasis">AMD</span>-like loader
			to prioritize and schedule the code excution. Finally I
			implemented a somewhat complex
			<span class="emphasis">Service Worker</span>
			to lower the loading delays.
		</span>
	</div>
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
