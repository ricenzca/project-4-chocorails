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

	async ajaxRequest (newInput,subtotal,adjustSubtotal,adjustGstAndGrandTotal,setPromoId) {
		const response = await fetch(`/promo/${newInput}`);
		const data = await response.json();
		console.log("data",data);
		console.log("subtotal",subtotal);
		if (data.valid) {
			let newSubtotal;
			console.log("data.discount",data.discount);
			if (data.discount.percent) {
				newSubtotal = Math.round((100-data.discount.amount)/100*subtotal*100)/100;
				console.log("newSubtotal after % discount",newSubtotal);
			} else {
				newSubtotal = subtotal-data.discount.amount;
				console.log("newSubtotal after $ discount",newSubtotal);
			}
			this.setState({
				codeValidationMessage:"Code applied!",
			});

			let newPromoId = data.promoId;
			setPromoId(newPromoId);
			
			if (newSubtotal<0) newSubtotal=0;
			console.log("newSubtotal",newSubtotal);
			adjustSubtotal(newSubtotal);

			let newGst = Math.round((newSubtotal*0.07)*100)/100;
			if (newSubtotal===0) newGst=0;
			console.log("newGst",newGst);
			console.log("newGst",typeof(newGst));
			console.log("newSubtotal",newSubtotal);
			console.log("typeof newSubtotal",typeof(newSubtotal));
			let newGrandTotal = newSubtotal+newGst+5;
			console.log("newGrandTotal", newGrandTotal);
			adjustGstAndGrandTotal(newGst, newGrandTotal);

		} else {
			this.setState({codeValidationMessage:"Promo code not valid"});

			adjustSubtotal(subtotal);
			let newGst = Math.round((subtotal*0.07)*100)/100;
			console.log("subtotal",subtotal);
			console.log("newGst",newGst);
			let newGrandTotal = subtotal+newGst+5;
			console.log("newGrandTotal", newGrandTotal);
			adjustGstAndGrandTotal(newGst, newGrandTotal);
		}
	}

	checkPromo (subtotal, adjustSubtotal,adjustGstAndGrandTotal, setPromoId, e) {
		let newInput =  e.target.value;
		console.log("newInput",newInput);
		this.setState({input: newInput})
		let data="";
		if (newInput) {
			clearTimeout(this.ajaxRequestTimeout);
			this.ajaxRequestTimeout = setTimeout(()=>{this.ajaxRequest(newInput,subtotal,adjustSubtotal,adjustGstAndGrandTotal,setPromoId)},500)
		}
	}

	render () {

		let subtotalToDisplay;
		if (this.props.subtotalAfterPromo !== null) {
			subtotalToDisplay = this.props.subtotalAfterPromo;
		} else {
			subtotalToDisplay = this.props.subtotal;
		}

		return (
			<div>
				<p className="formlabel">Promo code:</p>
				<input className="form-control" type="text" name="promo" value={this.state.value} onChange={e=>this.checkPromo(this.props.subtotal,this.props.adjustSubtotal,this.props.adjustGstAndGrandTotal,this.props.setPromoId,e)} />
				<p>{this.state.codeValidationMessage}</p>
				<p className="bold text-right">Subtotal: ${subtotalToDisplay.toFixed(2)}</p>
			</div>
		)
	}
}

export default Promo;