import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';
import * as StudentsAPI from "../../services/StudentsAPI";

function StudentListItem(props) {

    function handleDeleteStudent() {
        StudentsAPI.deleteOne(props.student._id).then(res => props.setChange(!props.change))
    }
    return (
        <div className="container">
            <div className="center">
                <h2>{props.student.name}</h2>
                <p>Grade: {props.student.grade}</p>
                <p>Date: {props.student.date}</p>
                <p>Subjects: {props.student.subjects}</p>
                <p>Reading Log: {props.student.readingLog}</p>
                <p>Notes: {props.student.notes}</p>
               
                <Link to={{ pathname: '/edit', state: { student: props.student } }}>
                    -EDIT STUDENT- <br />
                </Link>
                <button onClick={handleDeleteStudent}>
                    -DELETE STUDENT-
                </button><br/>
            </div>
        </div>
    );
}

export default StudentListItem;
