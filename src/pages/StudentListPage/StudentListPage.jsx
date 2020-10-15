import React from "react";
import "./StudentListPage.css";
import StudentListItem from "../../components/StudentListItem/StudentListItem";


function StudentListPage(props) {
    
    return (
        <>
            <h1>Students</h1>
            <div className="studentContainer">
            
                {props.students.map(student => (
                    <StudentListItem student={student} name={student.name} grade={student.grade} key={student._id }
                 />
                ))}
            </div>
        </>
    );
}


export default StudentListPage;