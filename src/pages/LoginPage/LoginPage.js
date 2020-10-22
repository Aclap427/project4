
import React, { Component } from "react";
import userService from "../../utils/userService";
import './LoginPage.css';

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
                    <div className="container">
                        <div>
        
                        <input  name="email" required
                            value={this.state.formData.email} placeholder="Email" onChange={this.handleChange} />
                    </div>
                    <div >
                  
                        <input type="password" name="password"
                            value={this.state.formData.password} placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="button"><img src='https://i.imgur.com/LTcI0PT.png?1' alt="apple" width="35px" /></button>
                </div></form>
            </>
        );
    }
}
export default LoginPage;