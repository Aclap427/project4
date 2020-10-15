import React from 'react';
import { Link } from 'react-router-dom';

function RecordCard({ record }) {
    return (
        <div className='panel panel-default'>
        
            <div className='panel-body'>
                <dl>
                    <dt>Date</dt>
                    <dd>{record.date}</dd>
                    <dt>Subjects</dt>
                    <dd>{record.subject}</dd>
                    <dt>Reading Log</dt>
                    <dd>{record.readingLog}</dd>
                    <dt>Notes</dt>
                    <dd>{record.notes}</dd>
                </dl>
            </div>
            <div className='panel-footer'>
                <Link to='/'>RETURN TO LIST</Link>
            </div>
        </div>
    );
}

export default RecordCard;