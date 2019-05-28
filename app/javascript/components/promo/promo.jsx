import React from 'react';

class Promo extends React.Component {
	constructor() {
		super();
		this.ajaxRequestTimeout = null;
		this.state = {
			input: "",
			codeValidationMessage: ""
		}
	}

	async ajaxRequest (newInput,subtotal,adjustSubtotal,adjustGstAndGrandTotal) {
		const response = await fetch(`/promo/${newInput}`);
		const data = await response.json();
		console.log("data",data);

		if (data.valid) {
			let newSubtotal;
			console.log("data.discount",data.discount);
			console.log("TYPEOF",typeof(data.discount.amount));
			if (data.discount.percent) {
				newSubtotal = (100-data.discount.amount)/100*subtotal;
				console.log("newSubtotal after % discount",newSubtotal);
			} else {
				newSubtotal = subtotal-data.discount.amount;
				console.log("newSubtotal after $ discount",newSubtotal);
			}
			this.setState({
				codeValidationMessage:"Code applied!",
			});
			adjustSubtotal(newSubtotal);

			let newGst = newSubtotal*0.177;
			console.log("newGst",newGst);
			let newGrandTotal = Math.round((newSubtotal+newGst+5)*100)/100;
			console.log("newGrandTotal", newGrandTotal);
			adjustGstAndGrandTotal(newGst, newGrandTotal);

		} else {
			this.setState({codeValidationMessage:"Promo code not valid"});

			adjustSubtotal(subtotal);
			let newGst = subtotal*0.177;
			console.log("newGst",newGst);
			let newGrandTotal = Math.round((subtotal+newGst+5)*100)/100;
			console.log("newGrandTotal", newGrandTotal);
			adjustGstAndGrandTotal(newGst, newGrandTotal);
		}
	}

	checkPromo (subtotal, adjustSubtotal,adjustGstAndGrandTotal, e) {
		let newInput =  e.target.value;
		console.log("newInput",newInput);
		this.setState({input: newInput})
		let data="";
		if (newInput) {
			clearTimeout(this.ajaxRequestTimeout);
			this.ajaxRequestTimeout = setTimeout(()=>{this.ajaxRequest(newInput,subtotal,adjustSubtotal,adjustGstAndGrandTotal)},500)
		}
	}

	render () {

		let subtotalToDisplay;
		if (this.props.subtotalAfterPromo) {
			subtotalToDisplay = this.props.subtotalAfterPromo;
		} else {
			subtotalToDisplay = this.props.subtotal;
		}

		return (
			<div>
				<p>Promo code: &nbsp;</p>
				<input type="text" name="promo" value={this.state.value} onChange={e=>this.checkPromo(this.props.subtotal,this.props.adjustSubtotal,this.props.adjustGstAndGrandTotal,e)} />
				<p>{this.state.codeValidationMessage}</p>
				<p>Subtotal: ${subtotalToDisplay}</p>
			</div>
		)
	}
}

export default Promo;