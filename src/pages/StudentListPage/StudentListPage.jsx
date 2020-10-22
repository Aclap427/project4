import React from "react";
import "./StudentListPage.css";
import StudentListItem from "../../components/StudentListItem/StudentListItem";
//import * as StudentsAPI from "../../services/StudentsAPI";


function StudentListPage(students, props) {

    return (
    
        <>

            {!props.user || !props.students.length ? (<></>) : (
                <div className="studentContainer">
                    {students.map(student => (
                        <StudentListItem student={student} name={student.name} grade={student.grade} key={student._id}
                           
                            handleDeleteStudent={props.handleDeleteStudent}
                        />
                    ))}
                </div>
            )} </>
    );
}

// function StudentListPage(props) {
//     return (
//         <>
//             {!props.user || !props.students.length ? (<></>) : (
//                 <div className="fleet">
//                     <h1>Your Fleet</h1>
//                     <div className="row">
//                         {props.students.map(student =>
//                             <StudentListItem
//                                 student={student}
//                                 handleDeleteStudent={props.handleDeleteStudent}
//                                 key={student._id} />
//                         )}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
export default StudentListPage;