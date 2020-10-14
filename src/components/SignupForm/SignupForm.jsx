import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import '../../pages/App/App.css';


class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            // Using ES2015 Computed Property Names
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            // Successfully signed up - show Page
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            // Invalid user data (probably duplicate email)
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <div className="container">
                <h2> Sign Up </h2>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div>
                            <input type="text"placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    <div className="form-group">
                        
                            <input type="email"placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        
                            <input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        
                    <input type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                    </div>
                    
                    <div className="form-group">
                        <div className="form-group">
                            <button type="submit" className="button"><img src='https://i.imgur.com/LTcI0PT.png?1' alt="apple" width="35px"/></button>
                            <button type="cancel" className="cancel"><Link to='/'><img src='https://i.imgur.com/xZb5UVV.jpg' alt="cancel" width="45px"/></Link></button>
                        </div>
                    </div >
                </div>
            </form>
        </div >
        );
    }
}

export default SignupForm;