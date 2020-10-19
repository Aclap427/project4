import React, { useState, useEffect } from "react";
import "./StudentListPage.css";
import StudentListItem from "../../components/StudentListItem/StudentListItem";
import * as StudentsAPI from "../../services/StudentsAPI";


function StudentListPage(props) {
    const [students, setStudents] = useState([]);
    const [change, setChange] = useState(true);

    useEffect(function () {
        StudentsAPI.getAll().then(res => setStudents(res))
    }, [change])

    return (
        <> 
            <div className="studentContainer">
                {students.map(student => (
                        <StudentListItem student={student} name={student.name} grade={student.grade} key={student._id}
                            change={change} setChange={setChange}
                            handleDeleteStudent={props.handleDeleteStudent}
                    />
                ))}
            </div>
        </>
    );
}


export default StudentListPage;