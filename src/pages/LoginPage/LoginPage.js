
import React, { Component } from "react";
import userService from "../../utils/userService";

class LoginPage extends Component {
    state = {
        invalidForm: true,
        formData: {
            email: "",
            password: "",
        },
    };

    formRef = React.createRef();

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state.formData);

            this.props.handleSignupOrLogin();
            this.props.history.push("/");
        } catch (err) {
            this.updateMessage(err.message);
        }
    };

    handleChange = (e) => {
        const formData = {
            ...this.state.formData,
            [e.target.name]: e.target.value,
        };
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity(),
        });
    };

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    render() {
        return (
            <>
                
                <h2>Log In</h2>
            
                <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                    <div >
                        <label>Your email (required)</label>
                        <input  name="email" required
                            value={this.state.formData.email} onChange={this.handleChange} />
                    </div>
                    <div >
                        <label>Your password</label>
                        <input type="password" name="password"
                            value={this.state.formData.password} onChange={this.handleChange} />
                    </div>
                    <button type="submit"  disabled={this.state.invalidForm}>LOG IN</button>
                </form>
            </>
        );
    }
}
export default LoginPage;