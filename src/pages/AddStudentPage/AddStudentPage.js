import React, { Component } from 'react';
//import tokenService from '../../utils/tokenService';

class AddStudentPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: '',
            grade: '',
            //user: tokenService.getUserFromToken(),
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddStudent(this.state.formData);
    };

    handleChange = e => {
        const formData = { ...this.state.formData, [e.target.name]: e.target.value };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <h1>Add a Student</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Student's Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Student's Grade</label>
                        <input
                            className="form-control"
                            name="grade"
                            value={this.state.formData.grade}
                            onChange={this.handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        ADD STUDENT
         </button>
                </form>
            </>
        );
    }
}
export default AddStudentPage;