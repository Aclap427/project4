import React from 'react';
import RecordCard from '../../components/RecordCard/RecordCard';




function StudentRecordPage(props) {
    const student = props.location.state.student;
    return (
        <>
            <h1>Student Records</h1>
            <RecordCard
                key={student._id}
                student={student}
            />
        </>
    );
}
export default StudentRecordPage;