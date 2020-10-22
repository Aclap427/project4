import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import studentService from '../../utils/studentService';
import * as StudentsAPI from '../../services/StudentsAPI';

//------------Pages---------------------------------------//
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import StudentListPage from '../StudentListPage/StudentListPage';
import AddStudentPage from '../AddStudentPage/AddStudentPage';
import EditStudentPage from '../EditStudentPage/EditStudentPage';
import StudentDetail from '../StudentDetail/StudentDetail';

//------------Components-----------------------------------//
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Apple from '../../components/Apple/Apple';


class App extends Component {

    constructor() {
        super();
        this.state = {
            students: [],
            user: userService.getUser(),
            
        };
    }

  

    componentDidMount = async () => {
        const students = await StudentsAPI.getAll();
        this.setState({ students });
    }

   
    /*--- Callback Methods ---*/
    handleLogout = () => {
        userService.logout();
        this.setState({ user: null, students: [] });
    }

    handleSignupOrLogin = async () => {
        this.setState({
            user: userService.getUser(),
            students: await studentService.getAll()
        });
    };

    handleAddStudent = async (newStudentData) => {
        const newStudent = await StudentsAPI.create(newStudentData);
        this.setState((state) => ({
            students: [...state.students, newStudent]
        }),
            () => this.props.history.push('/all'));
    }

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

    handleDeleteStudent = async id => {
        await StudentsAPI.deleteOne(id);
        this.setState(
            state => ({
                students: state.students.filter(s => s._id !== id),
            }),
            () => this.props.history.push("/all")
        );
    };

    /*--- Lifecycle Methods ---*/


    render() {
        return (
            <>
                <div>
                    <Header />
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
                            render={() => userService.getUser() ? <AddStudentPage user={this.state.user} handleAddStudent={this.handleAddStudent} />
                        : <Redirect to='/login'/>}
                        />

                        <Route exact path='/all' render={() => userService.getUser() ? 
                            <StudentListPage students={this.state.students} handleDeleteStudent={this.handleDeleteStudent}
                            /> :
                        <Redirect to='/login'/>}
                        />

                        <Route exact path="/edit" render={({ location }) => (userService.getUser() ? <EditStudentPage user={this.state.user}
                            handleUpdateStudent={this.handleUpdateStudent} location={location} /> : <Redirect to='/login' />)}
                        />

                          

                        <Route exact path="/details" render={({ location }) => (userService.getUser() ? <StudentDetail user={this.state.user}
                             location={location} /> : <Redirect to='/login' />)}
                        />

                    </Switch>
                </div>


                <div><Footer /></div>

            </>
        )

    }


}

export default App;