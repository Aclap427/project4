import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
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
//import RecordPage from '../RecordPage/RecordPage';

//------------Components-----------------------------------//
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Apple from '../../components/Apple/Apple';
//import StudentListItem from '../../components/StudentListItem/StudentListItem';
//import SignupForm from '../../components/SignupForm/SignupForm';
//import RecordForm from '../../components/RecordForm/RecordForm';
//import RecordCard from '../../components/RecordCard/RecordCard';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      students: [],
      };
  }

/*------------------ Callback Methods --------------*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null, students: [] })
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

  handleDeleteStudent = async id => {
    await StudentsAPI.deleteOne(id);
    this.setState(state => ({
      students: state.students.filter(s => s._id !== id)
    }), () => this.props.history.push('/all'));
  }

  handleUpdateStudent = async updatedStudentData => {
    const updatedStudent = await StudentsAPI.update(updatedStudentData);
    const newStudentsArray = this.state.students.map(s =>
      s._id === updatedStudent._id ? updatedStudent : s
    );
    this.setState(
      { students: newStudentsArray },
      () => this.props.history.push('/all')
    );
  }

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    const students = await StudentsAPI.getAll();
    this.setState({ students });
  }

  async componentDidUpdate(prevState) {
    if (this.state.user !== prevState.user) {
      const students = await StudentsAPI.getAll();
      this.setState({ students });
    }
  }

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
              <SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>}
          />

          <Route exact path='/login' render={({ history }) =>
            <LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin}/>}
          />

          <Route exact path='/add' render={() =>
            userService.getUser() ?
              <AddStudentPage user={this.state.user} handleAddStudent={this.handleAddStudent} />
              :
                <Redirect to='/login' />}
          />

          <Route exact path='/all' render={() =>
            userService.getUser() ?
              <StudentListPage students={this.state.students} handleDeleteStudent={this.handleDeleteStudent} />
              :
                <Redirect to='/login' />}
          />

          <Route exact path='/records' render={({ location }) =>
            <StudentRecordPage location={location} />} />
            
          <Route exact path='/students/edit' render={({ location }) =>
            userService.getUser() ?
              <EditStudentPage location={location} handleUpdateStudent={this.handleUpdateStudent} handleStudentStatusChange={this.handleStudentStatusChange} />
              :
              <Redirect to='/login' />}
          />
        </Switch>
          
        </div>
        <div><Footer /></div>
      
      </>
    )
      
  }
  
}

export default App;