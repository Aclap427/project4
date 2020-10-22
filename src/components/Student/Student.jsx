import React from 'react';
import { Link } from 'react-router-dom';


function Student({ student, handleDeleteStudent, user }) {
    return (
        <div>
            <div>
                <div>{student.name}</div>
                <div>{student.grade}</div>
            </div>
            <div>
                <div>
                    <Link
                        to={{
                            pathname: '/records',
                            state: { student }
                        }}
                    >
                        RECORDS
          </Link>
                </div>
                {
                    student.user === user._id ?
                        <Link
                            to={{
                                pathname: '/edit',
                                state: { student }
                            }}
                        >
                            EDIT
            </Link> : null
                }
                {
                    student.user === user._id ?
                        <button
                            
                            onClick={() => handleDeleteStudent(student._id)}
                        >
                            DELETE
          </button> : null
                }
            </div>
        </div>
    );
}

export default Student;