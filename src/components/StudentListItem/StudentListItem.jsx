import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';

function StudentListItem(props) {
    return (
        <div className="container">
            <div className="center">
                <h2>{props.student.name}</h2>
                <p>Grade: {props.student.grade}</p>
                <Link to={{ pathname: '/records', state: { student: props.student }}}>
                    -RECORDS- <br/>
                </Link>
                <Link to={{ pathname: '/edit', state: { student: props.student }}}>
                    -EDIT STUDENT- <br/>
                </Link>
                <button onClick={() => props.handleDeleteStudent(props.student._id)}>
                    -DELETE STUDENT-
                </button>
            </div>
        </div>
    );
}

export default StudentListItem;
