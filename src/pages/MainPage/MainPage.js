import React from 'react';
import StudentList from "../../components/StudentList/StudentList"
import './MainPage.css';

const MainPage = (props) => {
    return (
        <div id="mainPage">
     
            <StudentList
                user={props.user}
                students={props.students}
                handleDeleteStudent={props.handleDeleteStudent}
            />
     

        </div>
    );
};

export default MainPage;
