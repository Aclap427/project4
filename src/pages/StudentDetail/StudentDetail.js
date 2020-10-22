import React from 'react';
import StudentCard from '../../components/StudentCard/StudentCard';

function StudentDetail(props) {
    const student = props.location.state.student;
    return (
        <>
            <h1>Record Details- StudentDetail</h1>
            <StudentCard
                key={student._id}
                student={student}
                name={student.name}
            />
        </>
    );
}
export default StudentDetail;