import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';


function StudentListItem(Student, props) {
    return (
        <>
            <div className='container'>
                <div>
                    <h3>{Student.name}</h3>
                    <h4>{Student.grade}</h4>
                </div>
                <div>
                    <Link to={{
                        pathname: '/records',
                        state: { student: props.student }
                    }}>
                        RECORDS
                </Link>
                </div>

            </div></>
    );
}
export default StudentListItem;