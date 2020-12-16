import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PatientList from './PatientList';


// function to render each record
const Registered = props => ( // functional component in arrow syntax. functional components are used to display html. They are "stateless".
    <tr>
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
            <Link onClick={()=>this.handleDelete(props.demographic._id)}>DELETE</Link>
        </td>
    </tr>
    
    )
    

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demographic: []
        };
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentDidMount(){
        axios.get('http://localhost:3003/portal')
        .then(res =>{
            this.setState({demographic: res.data});
        })
        .catch((error) => {
            console.log(error);
        })
    }

    registeredPatients() {
        return this.state.demographic.map((registeredList, i) => {
            return < Registered demographic={registeredList} key={i} />; //return the "Registered" component and pass demographic and key props
        });
    }

    handleDelete(id) {
        axios.post('http://localhost:3003/portal/remove/'+this.props.match.params.id)
            .then(res => {
                const findIndex = this.state.demographic.findIndex(demographic => demographic._id === id)
                const copyDemographics = [...this.state.demographic]
                copyDemographics.splice(findIndex, 1)
                this.setState({demographic: copyDemographics})

            });
            this.props.history.push('/') 
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
