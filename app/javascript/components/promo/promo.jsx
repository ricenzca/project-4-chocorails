import React from 'react';

class Promo extends React.Component {
	constructor() {
		super();
		this.ajaxRequestTimeout = null;
		this.state = {
			input: ""
		}
	}

	async ajaxRequest (newInput) {
		const response = await fetch(`/promo/${newInput}`);
		const data = await response.json();
		console.log("data",data);
	}

	checkPromo (e) {
		let newInput =  e.target.value;
		console.log("newInput",newInput);
		this.setState({input: newInput})

		if (newInput) {
			clearTimeout(this.ajaxRequestTimeout);
			this.ajaxRequestTimeout = setTimeout(()=>{this.ajaxRequest(newInput)},500)
		}
	}

	render () {
		return (
			<div>
				Promo
				<input type="text" name="promo" value={this.state.value} onChange={e=>this.checkPromo(e)} />
			</div>
		)
	}
}

export default Promo;