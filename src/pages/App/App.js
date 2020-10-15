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
import StudentRecordPage from '../StudentRecordPage/StudentRecordPage';

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
    const students = await StudentsAPI.getAll();
    this.setState({ students });
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

  handleAddRecord = async newRecordData => {
    const newRecord = await StudentsAPI.create(newRecordData);
    this.setState(state => ({
      record: [state.record, newRecord]
    }),
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push('/all'));
    console.log(newRecord)
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
              <Apple />}
            />
          <Route exact path='/signup' render={({ history }) =>
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}
              />}
            />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}
              />}
            />

            
              <Route
                exact
                path="/add"
                render={({ history }) => <AddStudentPage history={history} handleAddStudent={this.handleAddStudent} />}
              />
              <Route exact path='/all' render={() =>
                <StudentListPage students={this.state.students}
                />}
              />
              <Route exact path='/records' render={({ location }) =>
                <StudentRecordPage location={location} />
              } />
            
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