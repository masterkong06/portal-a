import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Register from './components/Register';
import EditPatient from './components/EditPatient';
import CreatePatient from './components/CreatePatient';
import PatientRecord from './components/PatientRecord'

import Logo from "./images/healthi-logo.jpg";


function App() {
  return (
    <Router>
      <div className="container">
        <h1>Healthi Patient Portal</h1>
        <nav className=" navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="http://#" target="_blank" rel="noreferrer">
            <img src={Logo} width="25" height="25" alt="Healthi Patient Portal" /> {/*can use this sytax for logo as it was imported like the other components*/}
          </a>
          <Link to="/" className="navbar-brand">Registrations</Link>
          <Link to="/create" className="nav-link">New Visit</Link>
        </nav>
        <Route path="/" exact component={Register} /> {/* at this path load the Register component to show a list of all patients */}
        <Route path="/edit-pt/:id" component={EditPatient} /> {/* at this path load the EditPatient component to show and edit the data of one patient */}
        <Route path="/create" component={CreatePatient} /> {/* at this path load the CreateVisit component to create a new pateint */}
        <Route path="/view-pt" component={PatientRecord} /> {/* at this path load the PatientRecord component to view a patient's record */}
      </div>
    </Router>
  );
}

export default App;
