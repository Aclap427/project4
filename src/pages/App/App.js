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
import EditStudentPage from '../EditStudentPage/EditStudentPage';

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

  handleAddStudent = async newStudentData => {
    const newStudent = await StudentsAPI.create(newStudentData);
    this.setState(state => ({
      students: [...state.students, newStudent]
    }),
      () => this.props.history.push('/all'));
  }

  handleDeleteStudent = async id => {
    await StudentsAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        students: state.students.filter(s => s._id !== id),
      }),
      () => this.props.history.push("/all")
    );
  };

  handleUpdateStudent = async updatedStudentData => {
    const updatedStudent = await StudentsAPI.update(updatedStudentData);
    // Using map to replace just the puppy that was updated
    const newStudentsArray = this.state.students.map(s =>
      s._id === updatedStudent._id ? updatedStudent : s
    );
    this.setState(
      { students: newStudentsArray },
      // This cb function runs after state is updated
      () => this.props.history.push("/all")
    );
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, students: [] });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  render() {
    return (
      <>
        <div>
          <Header />
        </div>

        <div>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </div>

        <Switch>

          <Route exact path='/signup' render={({ history }) =>
            <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />}
          />

          <Route exact path='/login' render={({ history }) =>
            <LoginPage handleSignupOrLogin={this.handleSignupOrLogin} history={history} />}
          />

          <Route exact path='/' render={() => <Apple />}
          />

          <Route exact path='/all' render={() => <StudentListPage students={this.state.students}
            handleDeleteStudent={this.handleDeleteStudent} />}
          />

          <Route exact path='/add' render={() => <AddStudentPage handleAddStudent={this.handleAddStudent} />}
          />

          <Route exact path='/records' render={({ location }) => <StudentRecordPage location={location} />}
          />

          <Route exact path="/edit" render={({ location }) => (<EditStudentPage
            handleUpdateStudent={this.handleUpdateStudent} location={location} />)}
          />

        </Switch>
        <div>
          <Footer />
        </div>
      </>


    );
  }
}








export default App;