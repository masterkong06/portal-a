import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PatientList from './PatientList';


// function to render each record
const Registered = props => ( // functional component in arrow syntax. functional components are used to display html. They are "stateless".
    <tr>  {/*when I click on the table row go to PatientRecord.js and display person's information and recent test results*/}
        <td><button className="btn btn-primary">View</button></td>
        <td>{props.demographic.firstName}</td>
        <td>{props.demographic.lastName}</td>
        <td>{props.demographic.address}</td>
        <td>{props.demographic.city}</td>
        <td>{props.demographic.state}</td>
        <td>{props.demographic.zip}</td>
        <td>{props.demographic.phone}</td>
        <td>{props.demographic.email}</td>
        <td>{props.demographic.date_created}</td>
        <td>
            <Link to={"/edit-pt/"+props.demographic._id}>EDIT</Link>
            <button onClick={() => props.handleDelete(props.demographic._id)} >DELETE</button>
        </td>
    </tr>         
    
    )
    

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {demographic: []};
        this.getRecords = this.getRecords.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount(){
        this.getRecords()
    }

    getRecords(){
        axios.get('http://localhost:3003/portal')
        .then(res =>{
            this.setState({demographic: res.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    handleView(id){
        axios.get('http://localhost:3003/portal/'+id)
        .then(res => {
            
        })
    }


    handleDelete(id){
        axios.delete('http://localhost:3003/portal/remove/'+id)
        .then(res => {
            this.getRecords();
        })
    }

    registeredPatients() {
        return this.state.demographic.map((registeredList, i) => {
            return < Registered demographic={registeredList} key={i} handleDelete={this.handleDelete}/>; //return the "Registered" component and pass demographic and key props
        });
    }

    render() {
        return (
            <div>
                <h2>Registered Patients</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Check In</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.registeredPatients() }
                        {/* <PatientList handleDelete={this.handleDelete}></PatientList> */}
                    </tbody>
                </table>
            </div>
        )
    }
}
