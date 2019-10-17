const app = {
	title: 'Visibility Toggle',
	message: 'Some details here'
};

class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.handleToggleVisibility = this.handleToggleVisibility.bind(this); 
		this.state = {
			visibility: false
		};
	}
	handleToggleVisibility(prevState) {
		this.setState((prevState) => {
			return {
				visibility: !prevState.visibility
			}
		});	
	}
	render() {
		return (
			<div>
				<h1>{app.title}</h1>
				<button onClick={this.handleToggleVisibility}>
				{this.state.visibility ? 'Hide details' : 'Show details'}
				</button>
				{this.state.visibility && (
				<div>
					<p>{app.message}</p>
				</div>
				)}
			</div>
		)
	}
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));