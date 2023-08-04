import React,{useEffect,useState} from "react";
import './StudentData.css';
import {getStudentsData,deleteStudentsData,editStudentsData} from "../Api";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import End from './End';
import { Link, useNavigate } from "react-router-dom";

function StudentData() {
    const [students,setStudents] = useState([]);
    const [editstudent,setEditStudent] = useState([]);
    const Navigate = useNavigate();
    useEffect(
        ()=>{

            getStudents();

        },[ ]
    );

    let getStudents = async ()=>{
        let res = await getStudentsData();
        setStudents(res.data);
    }

    let editHandler = async (student) =>{
        setEditStudent(student);
        Navigate('/AddStudentData');
    };

    let deleteHandler = async (id) =>{
        await deleteStudentsData(id);
        alert("Data is Deleted!");
        getStudentsData();
        window.location.reload();
    };


    // mapping the data came from get api method
    const tableitems =  students.map((student)=>
                        (
                            <tr key={student.id}>
                                <th>{student.id}</th>
                                <td>{`${student.firstName} ${student.lastName}`}</td>
                                <td>{student.Branch}</td>
                                <td>{student.City}</td>
                                <td>{student.Emailid}</td>
                                <td>{student.MobileNumber}</td>
                                <td><button type="button" className="btn update" onClick={()=>{editHandler(student)}}><FontAwesomeIcon icon={faEdit} size="xl" style={{color: "#d6dff5",}} /></button></td>
                                <td><button type="button" className="btn update" onClick={()=>{deleteHandler(student.id)}}><FontAwesomeIcon icon={faTrashCan} size="xl" style={{color: "#c10b0b",}} /></button></td>
                            </tr>
                        ));          
    return(
        <div className="StudentData">

            {/* head */}
            <div className="t-head">
                <h1>student data</h1>
                <Link to='/AddStudentData'><button type="button" className="btn btn-primary">AddStudentData</button></Link>
            </div>
            
            {/* table */}
            <div className="table-1">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Branch</th>
                            <th>Location</th>
                            <th>Mail-Id</th>
                            <th>Mobile Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableitems};  
                    </tbody>
                </table>
            </div>

            {/* footer */}
            <End />
        </div>
    );
}
export default StudentData;