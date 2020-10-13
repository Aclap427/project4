import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
//import * as studentAPI from '../../src/services/StudentsAPI';
//import StudentPage from '../StudentPage/StudentPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <div>Welcome to Hell - this is your homepage</div>
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}

            />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
        </Switch>
      </div>
    );
  }
  // state = {
  //   students: []
  // };

  // async componentDidMount() {
  //   const students = await studentAPI.getAll();
  //   this.setState({ students });
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         React Students CRUD
  //         <nav>
  //           <NavLink exact to='/'>STUDENT LIST</NavLink>
  //         </nav>
  //       </header>
  //       <main>
  //         <Route exact path='/' render={() =>
  //           <StudentPage
  //             students={this.state.students}
  //           />
  //         } />
  //       </main>
  //     </div>
  //   );
  // }
}

export default App;