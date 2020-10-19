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
               
                <Link to={{ pathname: '/details', state: { student: props.student } }}>
                    -DETAILS- <br />
                </Link><br/>
                <Link to={{ pathname: '/edit', state: { student: props.student } }}>
                    -EDIT STUDENT- <br />
                </Link>
                <button onClick={handleDeleteStudent}>
                    -DELETE STUDENT-
                </button><br />
            </div>
        </div>
    );
}

export default StudentListItem;