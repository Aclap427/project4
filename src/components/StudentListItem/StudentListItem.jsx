import React from 'react';
import { Link } from 'react-router-dom';

function StudentListItem({ student, handleDeleteStudent }) {
    return (
        <div>
          
            <Link to={{
                pathname: '/details',
                state: { student }
            }}>{student.name}
            {student.date}</Link>
      
            <button
                onClick={() => handleDeleteStudent(student._id)
                }>Delete</button>
            <Link  to={{
                pathname: '/edit',
                state: { student }
            }}>Edit</Link>
        </div>
    );
}

export default StudentListItem;