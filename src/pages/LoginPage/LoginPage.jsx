import React, { Component } from 'react';
import userService from '../../utils/userService';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.login(this.state);
            // Successfully logged up - show GamePage
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            alert('Invalid credentials');
        }
    }

    render() {
        return (
            <div className="Container">
                <h2> Log In </h2>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        
                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /> <br/>
                        <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} /> <br/>
                        <button type="submit" className="button"><img src='https://i.imgur.com/LTcI0PT.png?1' alt="apple" width="35px"/></button>
                           
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;