import React from 'react';

class EditStudentPage extends React.Component {
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
        const formData = { ...this.state.formData, [e.target.name]: e.target.grade };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    handleCheck = e => {
        const formData = {
            ...this.state.formData, completed: !this.state.formData.completed
        }
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    render() {
        return (
            <>
                <h1>Edit Student</h1>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                        <label>Grade</label>
                        <input
                            name="grade"
                            value={this.state.formData.grade}
                            onChange={this.handleCheck}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={this.state.invalidForm}
                    >
                        Save Changes
         </button>&nbsp;&nbsp;
         
                </form>
            </>
        );
    }
}
export default EditStudentPage;