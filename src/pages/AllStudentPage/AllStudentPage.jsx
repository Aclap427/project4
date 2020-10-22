import React from 'react';
import Student from '../../components/Student/Student'
import './AllStudentPage.css'
import { Link } from 'react-router-dom';

function AllStudentPage(props) {
    let student = props.user ?
        <div>
            <div className='header'>
                All Students
            </div>
            <div>
                {props.students.map(student =>
                    <Student
                        handleDeleteStudent={props.handleDeleteStudent}
                        student={student}
                        key={student._id}
                        user={props.user}
                    />
                )}
            </div>
        </div>
    :
            <div>
                <Link to='/login' className='NavBar-link loginMessageText'>
                    Login to view students
                </Link>
            </div>
    return (
            <div>
                {student}
            </div>
            );
        
}


export default AllStudentPage;