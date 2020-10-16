import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditStudentPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.student
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateStudent(this.state.formData);
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
                <h1>Edit Student</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Grade</label>
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
                        className="btn btn-xs"
                        disabled={this.state.invalidForm}
                    >
                        Save Changes
         </button>&nbsp;&nbsp;
         <Link to='/'>CANCEL</Link>
                </form>
            </>
        );
    }
}
export default EditStudentPage;