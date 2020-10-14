import React, { Component } from 'react';
import { Route, Switch, /*redirect,*/ } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import * as StudentsAPI from '../../services/StudentsAPI';
import StudentPage from '../StudentPage/StudentPage';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Apple from '../../components/Apple/Apple';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    
    };
  }
  state = {
    students: []
  };

  async componentDidMount() {
    const studentsFromAPI = await StudentsAPI.getAll();
    this.setState({ studentsFromAPI });
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
      <>
      <div>
        <Header/>
      </div>
      <div>
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
              <Apple/>
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
            <main>
              <Route exact path='/' render={() =>
                <StudentPage
                  students={this.state.students}
                />
              } />
            </main>
        </Switch>
        </div>
        
   
        <div><Footer /></div>
      );
    }
  </>
    );
      
  }
  
//   <Route exact path='/high-scores' render={() => (
//   userService.getUser() ?
//     <HighScoresPage />
//     :
//     <Redirect to='/login' />
// )} />
}

export default App;