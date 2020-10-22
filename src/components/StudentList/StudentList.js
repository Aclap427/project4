
import React from 'react';
import StudentListItem from '../StudentListItem/StudentListItem';

function StudentList(props) {
    return (
        <>
            {!props.user || !props.students.length ? (<></>) : (
                <div>
                    <h1>Your Records</h1>
                    <div>
                        {props.students.map(student =>
                            <StudentListItem
                                student={student}
                                name={student.name}
                                handleDeleteStudent={props.handleDeleteStudent}
                                key={student._id} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default StudentList;