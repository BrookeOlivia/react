import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
const { render } = ReactDOM;
import { Detail } from '../components/Detail';
import { Component } from 'react';


var PEOPLE = [
	{name: 'Sarah', number: '540-298-2745', room: "292", id: "1", eid: "sarah"},
	{name: 'Eddy', number: '456-229-4352', room: "4678", id: "2", eid: "eddy"},
	{name: 'Janet', number: '540-568-5531', room: "982", id: "3",  eid: "janet"},
	{name: 'Craig', number: '456-789-0936', room: "2435", id: "4", eid: "craig"}
];

class PhoneBookRow extends React.Component {
	constructor(props){
		super(props);
		
		this.personInfo = this.personInfo.bind(this);
	}
	personInfo(){
		this.state = {name: this.props.name, eid: this.props.eid, number: this.props.number, room: this.props.room, id: this.props.id};
		document.getElementById("filteredSearch").innerHTML = "<h2>" + this.state.name + "</h2>" + "<p><strong>Email:</strong> <a href='mailto:" + this.state.eid +  "@example.com'>" + this.state.eid +  "@example.com</a><br /><strong>Phone Number:</strong> " + this.state.number + "<br /><strong>Office:</strong> " + this.state.room + "</p>" + <Detail eid={this.state.eid}/>;

	}
	render(){
		return(
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.number}</td>
				<td>{this.props.room}</td>
				<td>{this.props.eid} - <button onClick={this.personInfo.bind(this)}>More Information</button></td>
			</tr>
		)
	}
}
class PersonRow extends React.Component {
	render(){
		var rows=[];
		this.props.people.forEach(function(person){
			rows.push(<PhoneBookRow name={person.name} number={person.number} room={person.room} key={person.id} eid={person.eid}/>);
		});
		return(
			<div>
				<div id="filteredSearch">

				</div>
				<table>
	  				<tr>
		  				<th>Name</th>
		  				<th>Phone Number</th>
		  				<th>Room</th>
		  				<th></th>
	  				</tr>
					<tbody>{rows}</tbody>
				</table>

				

			</div>
		);
	}
}

export class PhoneBook extends React.Component {
  render() {
  	return (
  		<div className="phone-book">
  			<h2 className="page-title">Phone Book</h2>

  			<hr />
  			<PersonRow people={PEOPLE}/>
	  		
  		</div>
    );
  }
}

