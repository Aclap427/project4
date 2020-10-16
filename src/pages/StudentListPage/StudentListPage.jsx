import React from "react";
import "./StudentListPage.css";
import StudentListItem from "../../components/StudentListItem/StudentListItem";

function StudentListPage(props) {
    return (
        <>
            {StudentListPage}
            <div className="studentContainer">
                    {props.students.map(student => (
                        <StudentListItem student={student} name={student.name} grade={student.grade} key={student._id}
                            handleDeleteStudent={props.handleDeleteStudent}
                        />
                    ))}
                </div>
        </>
    );
}


export default StudentListPage;