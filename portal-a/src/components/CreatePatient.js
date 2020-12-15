import React, { Component } from 'react'

export default class CreatePatient extends Component {

    constructor(props) {
        super(props);
        this.state ={
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            date: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // For each field that is is changed set their state to the current value of that field. Changes the data of the fields
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        
        console.log(`Form submitted: `);
        console.log(`${this.state.firstName},
        ${this.state.lastName},
        ${this.state.address},
        ${this.state.city},
        ${this.state.state},
        ${this.state.zip},
        ${this.state.phone},
        ${this.state.email},
        ${this.state.date}
        `)


        this.setState({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: "",
            email: "",
            date: "",
          });
    }


    render() {
        return (
            <div>
                <h2>Register a New Patient</h2>
                <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' className="form-control" id='firstName' name='firstName' onChange={this.handleChange} value={this.state.firstName} placeholder="Enter first name"></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor='firstName'>Last Name</label>
                    <input type='text' className="form-control" id='lastName' name='lastName' onChange={this.handleChange} value={this.state.lastName} placeholder="Enter last name"></input>
                </div>

                <div className="form-group">
                    <label htmlFor='address'>Address</label>
                    <input type='text' className="form-control" id='address' name='address' onChange={this.handleChange} value={this.state.address} placeholder="Enter address"></input>
                </div>

                <div className="form-group">
                    <label htmlFor='city'>City</label>
                    <input type='text' className="form-control" id='city' name='city' onChange={this.handleChange} value={this.state.city} placeholder="Enter city"></input>
                </div>

                <div className="form-group">
                    <label htmlFor='state'>State</label>
                    <input type='text' className="form-control" id='state' name='state' onChange={this.handleChange} value={this.state.state} placeholder="Enter state"></input>
                </div>

                <div className="form-group">
                    <label htmlFor='zip'>Zip Code</label>
                    <input type='number' className="form-control" id='zip' name='zip' onChange={this.handleChange} value={this.state.zip} placeholder="Enter zip"></input>
                </div>

                <div className="form-group">
                    <label htmlFor='phone'>Phone</label>
                    <input type='number' className="form-control" id='phone' name='phone' onChange={this.handleChange} value={this.state.phone} placeholder="Enter phone"></input>
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type='text' className="form-control" id='email' name='email' onChange={this.handleChange} value={this.state.email} placeholder="Enter email"></input>
                </div>

                <div className="form-group" >
                    <label htmlFor='date'>Date</label>
                    <input type='date' className="form-control" id='date' name='date' onChange={this.handleChange} value={this.state.date} placeholder="Enter date"></input>
                </div>
                <div className="form-group"><input type='submit' className=" btn btn-primary" value='Add Patient'></input></div>

                </form>
            </div>
        )
    }
}
