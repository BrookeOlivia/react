const { render } = ReactDOM;
import React from 'react'
import { Component } from 'react';
var PEOPLE = [
	{name: 'Sarah', number: '540-298-2745', room: "292", id: "1", eid: "sarah"},
	{name: 'Matthew', number: '456-229-4352', room: "4678", id: "2", eid: "matthew"},
	{name: 'Janet', number: '540-568-5531', room: "982", id: "3",  eid: "janet"},
	{name: 'Craig', number: '456-789-0936', room: "2435", id: "4", eid: "craig"}

];

export class PersonDetail extends Component {

	render(){
		
		return(
			<div className="detail">				
				<h2 className="page-title">{this.props.params.eid}</h2>
				<hr />
				<p><a href="mailto:hallja@test.com">{eid}@test.com</a></p>
				<p>number</p>
				<p>Office: </p>
				
			</div>
		);
	}
}

export class Detail extends React.Component {
  render() {
  	return (
  		<div className="phone-detail">
  			<PersonDetail />

  		</div>
    );
  }
}
