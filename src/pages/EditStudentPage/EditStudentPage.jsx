import React, { Component } from 'react';
import './EditStudentPage.css';


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
            <div id="editContainer">
                <h2>Edit Student</h2>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Grade:</label>
                        <input
                            name="grade"
                            value={this.state.formData.grade}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Date:</label>
                        <input
                            name="date"
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                            required
                        />
                    </div> <div>
                        <label>Subjects:</label>
                        <input
                            name="subjects"
                            value={this.state.formData.subjects}
                            onChange={this.handleChange}
                            required
                        />
                    </div> <div>
                        <label>Reading Log:</label>
                        <input
                            name="readingLog"
                            value={this.state.formData.readingLog}
                            onChange={this.handleChange}
                            required
                        />
                    </div> <div>
                        <label>Notes:</label>
                        <input
                            name="notes"
                            value={this.state.formData.notes}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type="submit" disabled={this.state.invalidForm}><img src='https://i.imgur.com/LTcI0PT.png?1' alt="apple" width="35px" />
                    </button>
                </form>
            </div>
        );
    }
}
export default EditStudentPage;