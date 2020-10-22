import React from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';

function StudentDetail(props) {
    const student = props.location.state.student;
    return (
        <>
            <h2>Record Details</h2>
            <StudentCard
                key={student._id}
                student={student}
            />
        </>
    );
}
export default StudentDetail;