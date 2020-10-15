import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';


function StudentListItem(Student, props) {
    return (
        <>
            <div className='container'>
                <div className='center'>
            
                <h2>{Student.name}</h2>
                <p> Grade: {Student.grade}</p>
            
            
                <Link to={{pathname: '/records',
                    state: { student: props.student }}}>
                        RECORDS
                </Link>
                <Link to={{
                            pathname: '/edit',
                            state: { student: props.student }
                        }}
                    >
                        EDIT
</Link>
                <button onClick={() => props.handleDeleteStudent(props.student._id)}>
                DELETE</button>
            
            </div>
            
        </div></>
    );
}

export default StudentListItem;
