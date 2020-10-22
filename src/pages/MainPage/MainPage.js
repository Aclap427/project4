import React from 'react';
import StudentList from "../../components/StudentList/StudentList"

const MainPage = (props) => {
    return (
        <div>
            <h2>Student Main Page</h2>
            <StudentList
                user={props.user}
                students={props.students}
                name={props.students.name}
                handleDeleteStudent={props.handleDeleteStudent}
            />
     

        </div>
    );
};

export default MainPage;
