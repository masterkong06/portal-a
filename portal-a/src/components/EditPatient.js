import React, { Component } from 'react'
import axios from 'axios';

export default class EditPatient extends Component {

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

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();

         // create a new object to collect values from the submited form
         const editedPatient ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            phone: this.state.phone,
            email: this.state.email,
            date: this.state.date,
        }

        axios.post('http://localhost:3003/portal//edit/'+this.props.match.params.id, editedPatient)
            .then(res => console.log(res.data));

            this.props.history.push('/') // Return user to index route. React router history object. https://reactrouter.com/core/api/history


        // this.setState({
        //     firstName: "",
        //     lastName: "",
        //     address: "",
        //     city: "",
        //     state: "",
        //     zip: "",
        //     phone: "",
        //     email: "",
        //     date: "",
        //   });
    }

    componentDidMount() {
        axios.get('http://localhost:3003/portal/'+this.props.match.params.id) // React router match object https://reactrouter.com/core/api/match
        .then(res => {
            this.setState({
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                address: res.data.address,
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                phone: res.data.phone,
                email: res.data.email,
                date: res.data.date
            })
            console.log(res.data);
        })
        .catch((err) =>{
            console.log(err);
            
        })
    }
    render() {
        return (
            <div>
                <h2>Update Patient Information</h2>
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
                    <div className="form-group"><input type='submit' className=" btn btn-primary" value='Update Record'></input></div>
                </form>
            </div>
        )
    }
}
