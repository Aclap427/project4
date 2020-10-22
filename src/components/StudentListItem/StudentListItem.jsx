import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';
//import * as StudentsAPI from "../../services/StudentsAPI";

function StudentListItem(student, handleDeleteStudent) {

 
    return (
        <div className="container">
            <div className="center">
                <h2>{student.name}</h2>
                <p>Grade: {student.grade}</p>
                <p>Date: {student.date}</p>
               
                <Link to={{ pathname: '/details', state: { student } }}>
                    -DETAILS- <br />
                </Link><br/>
                <Link to={{ pathname: '/edit', state: { student } }}>
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