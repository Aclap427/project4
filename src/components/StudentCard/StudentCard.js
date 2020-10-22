import React from 'react';
import { Link } from 'react-router-dom';



function StudentCard({ student }) {
    return (
        <div className='card'>
            <div>
                <h3>{student.name}</h3>
            </div>
            <div>
                <dl>
                  
                    <dt>Date:</dt>
                    <dd>{student.date}</dd>
                    <dt>Subjects:</dt>
                    <dd>{student.subjects}</dd>
                    <dt>Reading Log:</dt>
                    <dd>{student.readingLog}</dd>
                    <dt>Notes:</dt>
                    <dd>{student.notes}</dd>
                    
                </dl>
            </div>
            <div className="linkButton">
                <Link to='/all'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}

export default StudentCard;