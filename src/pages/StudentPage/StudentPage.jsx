import React from "react";
import "./StudentPage.css";
import Student from "../../components/Student/Student";


function StudentPage(props) {
    
    return (
        <>
            <h1>Student List</h1>
            <div className="Student-grid">
                {props.students.map((student, idx) => (
                    <Student student={student} key={student._id} />
                ))}
            </div>
        </>
    );
}
export default StudentPage;