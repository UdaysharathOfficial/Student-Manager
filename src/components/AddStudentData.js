import React,{useState} from "react";
import {postStudentsData} from "../Api";
import End from './End';
import './AddStudentData.css';
import { useNavigate } from "react-router-dom";

function AddStudentData() {

    let Navigate = useNavigate();

    const[enteredFirstName,setenteredFirstName] = useState('');
    const[enteredLastName,setenteredLastName] = useState('');
    const[enteredLocation,setenteredLocation] = useState('');
    const[enteredBranch,setenteredBranch] = useState('');
    const[enteredEmailId,setenteredEmailId] = useState('');
    const[enteredMobileNumber,setenteredMobileNumber] = useState('');

    const enterFirstName = (event) => {
        setenteredFirstName(event.target.value);
    }
    
    const enterLastName = (event) => {
        setenteredLastName(event.target.value);
    }

    const enterLocation = (event) => {
        setenteredLocation(event.target.value);
    }
    const enterBranch = (event) => {
        setenteredBranch(event.target.value);
    }

    const enterEmailId = (event) => {
        setenteredEmailId(event.target.value);
    }

    const enterMobileNumber = (event) => {
        setenteredMobileNumber(event.target.value);
    }

    const submitStudentData = (event) =>{
        const student =   {
                            firstName: enteredFirstName,
                            lastName: enteredLastName,
                            City: enteredLocation,
                            Branch: enteredBranch,
                            Emailid: enteredEmailId,
                            MobileNumber: enteredMobileNumber
                        }; 
        event.preventDefault();
        postStudentsData(student);
        alert("Data Added Successfully!");
        Navigate('/StudentData')
    }


    return (
        <div className="add-data">
            <div className="form-data">

                <h1>Add Student Data Here...</h1>

                <form className="row g-3 form-floating" onSubmit={submitStudentData}>
                    <div className="form-floating col-md-4">
                        <input onChange={enterFirstName} type="text" value={enteredFirstName} className="form-control" id="floatingFirstname" placeholder="First Name" />
                        <label htmlFor="floatingFirstname">First Name</label>
                    </div>
                    <div className="form-floating col-md-4">
                        <input onChange={enterLastName} type="text" value={enteredLastName} className="form-control" id="floatingLastname" placeholder="Last Name" />
                        <label htmlFor="floatingLastname">Last Name</label>
                    </div>
                    <div className="form-floating col-md-4">
                        <input onChange={enterLocation} type="text" value={enteredLocation} className="form-control" id="floatingCity" placeholder="City" />
                        <label htmlFor="floatingCity">City</label>
                    </div>
                    <div className="form-floating col-md-4">
                        <select onChange={enterBranch} value={enteredBranch} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option value="Choose...">Choose...</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="CE">CE</option>
                            <option value="ME">ME</option>
                        </select>
                        <label htmlFor="floatingSelect">Branch</label>
                    </div>
                    <div className="form-floating col-md-4">
                        <input onChange={enterEmailId} type="email" value={enteredEmailId} className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating col-md-4">
                        <input onChange={enterMobileNumber} type="text" value={enteredMobileNumber} className="form-control" id="floatingInput" placeholder="(xxx)xxx-xxxx" />
                        <label htmlFor="floatingInput">Mobile Number</label>
                    </div>
                    <div className="col-12 check">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">Accept All Terms And Conditions</label>
                        </div>
                    </div>
                    <div className="col-12 submit">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <End />
        </div>
    );
}
export default AddStudentData;