import React from 'react';
//import { Link } from 'react-router-dom';
import './Student.css';

function Student(props) {
    return (
        <div className='panel panel-default'>
            <div className="panel-heading">
                <h3 className='panel-title'>{props.student.name}</h3>
            </div>
            <div className='panel-footer Student-action-panel'>

            </div>
        </div>
    );
}

export default Student;