import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                        <div>
                            <input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group">
                            <button className="button">Log In</button><br/>
              <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;