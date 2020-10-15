import React from 'react';
//import { Link } from 'react-router-dom';
import './StudentListItem.css';

function StudentListItem(props) {
    return (
        <div className='container'>
            <div>
                <h3>{props.student.name}</h3>
            </div>
            <div>

            </div>
        </div>
    );
}

export default StudentListItem;
