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
            
            </div>
            
        </div></>
    );
}

export default StudentListItem;
