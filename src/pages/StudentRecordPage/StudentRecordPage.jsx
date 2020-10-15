import React, { Component } from 'react';
import tokenService from '../../utils/tokenService';

class StudentRecordPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            date: '',
            subjects: '',
            readingLog: 'Book Title and pages read',
            notes: '',
            user: tokenService.getUserFromToken(),
        }
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddRecord(this.state.formData);
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
                <h1> STUDENT RECORDS </h1>
                <div className="recordContainer">
                    <h3>Add a Record</h3>
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Date</label>
                        <input
                            className="form-control"
                            name="date"
                            value={this.state.formData.date}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Subjects Studied</label>
                        <input
                            className="form-control"
                            name="subjects"
                            value={this.state.formData.subjects}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Reading Log</label>
                        <input
                            className="form-control"
                            name="readingLog"
                            value={this.state.formData.readingLog}
                            onChange={this.handleChange}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Notes</label>
                            <input
                            className="form-control"
                            name="notes"
                            value={this.state.formData.notes}
                            onChange={this.handleChange}
                            
                            />
                        </div>
                    <button
                        type="submit"
                        className="btn"
                        disabled={this.state.invalidForm}
                    >
                        ADD RECORD
         </button>
                    </form>
                    </div>
            </>
        );
    }
}
export default StudentRecordPage;