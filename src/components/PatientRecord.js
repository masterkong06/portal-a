import React, { Component } from 'react'

export default class PatientRecord extends Component {
    constructor(props) {
        super(props);
        this.state ={
            firstName: '' ,
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
                <h2>View a single patient's record</h2>
            </div>
        )
    }
}
