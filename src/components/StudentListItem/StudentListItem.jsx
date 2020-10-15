import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';

function StudentListItem(student, props) {
    return (
        <div className='container'>
            <div>
                <h3>{student.name}</h3>
                <h4>{student.grade}</h4>
            </div>
            <Link to={{
                    pathname: '/records',
                    state: { student: props.student }
                }}
            >
                RECORDS
</Link>
        </div>
    );
}

export default StudentListItem;
