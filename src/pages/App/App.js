import React, { Component } from 'react';
import { Route, Switch, /*redirect,*/ } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import * as StudentsAPI from '../../services/StudentsAPI';

 //------------Pages---------------------------------------//
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import StudentListPage from '../StudentListPage/StudentListPage';
import AddStudentPage from '../AddStudentPage/AddStudentPage';

//------------Components-----------------------------------//
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Apple from '../../components/Apple/Apple';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      students: [],
      };
  }

  async componentDidMount() {
    const studentsFromAPI = await StudentsAPI.getAll();
      this.setState({
        studentsFromAPI: studentsFromAPI,
    });
  }

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleAddStudent = async newStudentData => {
    const newStudent = await StudentsAPI.create(newStudentData);
    this.setState(state => ({
      student: [state.student, newStudent]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/all'));
    console.log(newStudent)
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
            
              <Route exact path='/add' render={() =>
                <AddStudentPage
                  handleAddStudent={this.handleAddStudent}
                />
              } />
              <Route exact path='/all' render={() =>
                <StudentListPage
                  students={this.state.students}
                />
              } />
            </main>
        </Switch>
        </div>
        
   
        <div><Footer /></div>
      
  </>
    )
      
  }
  
//   <Route exact path='/high-scores' render={() => (
//   userService.getUser() ?
//     <HighScoresPage />
//     :
//     <Redirect to='/login' />
// )} />
}

export default App;