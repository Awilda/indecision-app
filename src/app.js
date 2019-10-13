class IndecisionApp extends React.Component {
	render() {
		const title = 'Indecision';
		const subtitle = 'Put your life in the hands of a computer';
		const options = ['Thing one', 'Thing two', 'Thing three'];

		return (
			<div>
				<Header title ={title} subtitle={subtitle} />
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		)
	};
}

class Header extends React.Component {
	render() {
	// 'this' it is a reference to the current instance of this component
	// console.log(this.props);
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.options.map((option) => {
						return <Option key={option} optionText={option} />
					})
				}

			</div>
		);
	}
}

class AddOption extends React.Component {
	render() {
		return (
			<div>
				<p>AddOption component here</p>
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
		)
	};
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));