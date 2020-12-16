import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PatientList extends Component {
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
    }
    render() {
        return (
            <div>
            <tr>
                <td>{this.props.demographic.firstName}</td>
                <td>{this.props.demographic.lastName}</td>
                <td>{this.props.demographic.address}</td>
                <td>{this.props.demographic.city}</td>
                <td>{this.props.demographic.state}</td>
                <td>{this.props.demographic.zip}</td>
                <td>{this.props.demographic.phone}</td>
                <td>{this.props.demographic.email}</td>
                <td>{this.props.demographic.date_created}</td>
                <td>
                    <Link to={"/edit-pt/"+this.props.demographic._id}>EDIT</Link>
                    <Link onClick={()=>this.handleDelete(this.props.demographic._id)}>DELETE</Link>
                </td>
            </tr>
    
                
            </div>
        )
    }
}
