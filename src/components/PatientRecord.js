import React, { Component } from 'react'

export default class PatientRecord extends Component {

    render() {
        return (
            <div>
                <h1>View a single patient's record</h1>
                <table>
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
                            <button onClick={() => props.handleDelete(props.demographic._id)} >DELETE</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
