import React from 'react';
import { Link } from 'react-router-dom';

function StudentCard({ student }) {
    return (
        <div>
            <div>
                <h3 >{student.name} &nbsp; &nbsp; {student.grade}</h3>
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
            <div>
                <Link to='/details'>RETURN TO LIST</Link>
            </div>

        </div>
    );
}

export default StudentCard;