const app = {
	title: 'Visibility Toggle',
	message: 'Some details here'
};

let visibility = false;

const toggleVisibility = () => {
	visibility = !visibility;
	renderVisibilityToggle();
};

const renderVisibilityToggle = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={toggleVisibility}>
				{visibility ? 'Hide details' : 'Show details'}
			</button>
			{visibility && (
				<div>
					<p>{app.message}</p>
				</div>
			)}
		</div>
	)

	ReactDOM.render(template, document.getElementById('app'));
};

renderVisibilityToggle();