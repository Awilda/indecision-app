'use strict';

var app = {
	title: 'Visibility Toggle',
	message: 'Some details here'
};

var visibility = false;

var toggleVisibility = function toggleVisibility() {
	visibility = !visibility;
	renderVisibilityToggle();
};

var renderVisibilityToggle = function renderVisibilityToggle() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'button',
			{ onClick: toggleVisibility },
			visibility ? 'Hide details' : 'Show details'
		),
		visibility && React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				app.message
			)
		)
	);

	ReactDOM.render(template, document.getElementById('app'));
};

renderVisibilityToggle();
