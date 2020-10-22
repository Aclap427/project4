import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import studentService from '../../utils/studentService';

//------------Pages---------------------------------------//
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddStudentPage from '../AddStudentPage/AddStudentPage';
import EditStudentPage from '../EditStudentPage/EditStudentPage';
import StudentDetail from '../StudentDetail/StudentDetail';
import MainPage from '../MainPage/MainPage';

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
            user: userService.getUser()
        };
    }

    handleAddStudent = async (newStudentData) => {
        const newStudent = await studentService.create(newStudentData);
        this.setState((state) => ({
            students: [...state.students, newStudent]
        }),
            () => this.props.history.push('/details'));
    }

    handleUpdateStudent = async (updatedStudentData) => {
        const updatedStudent = await studentService.update(updatedStudentData);
        const newStudentsArray = this.state.students.map((student) =>
            student._id === updatedStudent._id ? updatedStudent : student
        );
        this.setState(
            { students: newStudentsArray },
            () => this.props.history.push("/details")
        );
    };

    handleDeleteStudent = async (id) => {
        await studentService.deleteOne(id);
        this.setState(
            (state) => ({
                students: state.students.filter((student) => student._id !== id),
            }),
            () => this.props.history.push("/details")
        );
    };

    handleLogout = () => {
        userService.logout();
        this.setState({
            user: null,
            students: []
        });
    }

    handleSignupOrLogin = async () => {
        this.setState({
            user: userService.getUser(),
            students: await studentService.getAll()
        });
    };

    componentDidMount = async () => {
        const students = await studentService.getAll();
        this.setState({ students });
    }

    render() {
        return (
            <div>
                <header>
                    <div>
                    <Header/>
                        <NavBar
                            user={this.state.user}
                            handleLogout={this.handleLogout}
                        />
                   
                    </div>
                </header>
                <main>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Apple />
                        )} />
                        <Route exact path="/details" render={() => (
                            <MainPage user={this.state.user}
                                students={this.state.students}
                                handleDeleteStudent={this.handleDeleteStudent}
                                
                            />)}
                        />
                        <Route exact path="/signup" render={({ history }) => (
                            <SignupPage history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />)}
                        />
                        <Route exact path="/login" render={({ history }) => (
                            <LoginPage history={history}
                                handleSignupOrLogin={this.handleSignupOrLogin}
                            />)}
                        />
                        <Route exact path="/add" render={() => (
                            <AddStudentPage user={this.state.user}
                                handleAddStudent={this.handleAddStudent} />
                        )}
                        />
                
                        <Route exact path="/details" render={({ location }) => (
                            <StudentDetail location={location} />
                        )}
                        />
                        <Route exact path="/edit" render={({ location }) => (
                            <EditStudentPage location={location}
                                handleUpdateStudent={this.handleUpdateStudent}
                            />)}
                        />
                    </Switch>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;



