import React from "react";
import "./StudentListPage.css";
import StudentListItem from "../../components/StudentListItem/StudentListItem";


function StudentListPage(props) {
    return (
        <>
            <h1>Students</h1>
            <div className="StudentListPage-grid">
                {props.students.map(student => (
                    <StudentListItem student={student} key={student._id}
                 />
                ))}
            </div>
        </>
    );
}


export default StudentListPage;