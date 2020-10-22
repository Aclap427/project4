import React from 'react';
import { Link } from 'react-router-dom';
import './StudentListItem.css';


function StudentListItem({ student, handleDeleteStudent }) {
    return (
        <div id="bit">
            {student.name} | {student.date} | &nbsp;
            <Link to={{
                pathname: '/RecordDetails',
                state: { student }
            }}>DETAILS</Link>
      &nbsp; &nbsp; | &nbsp; &nbsp;
           <Link  to={{
                pathname: '/edit',
                state: { student }
            }}>EDIT</Link>
      &nbsp; &nbsp; | &nbsp; &nbsp; 
            <button className="buttonRec"
                onClick={() => handleDeleteStudent(student._id)
                }>DELETE</button>
        </div>
    );
}

export default StudentListItem;