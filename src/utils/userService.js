import tokenService from './tokenService';
const BASE_URL = '/api/users/';

export default {
    signup,
    getUser,
    logout,
    login
};


function signup(user) {
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(user)
    })
        .then(res => {
            console.log(res)
            if (res.ok) return res.json();
            throw new Error('Email already taken!');
        })
        // Parameter destructuring!
        .then(({ token }) => tokenService.setToken(token));
    // the above could have been written as
    //.then((token) => token.token);
}

function getUser() {
    return tokenService.getUserFromToken();
}

function logout() {
    tokenService.removeToken();
}

function login(creds) {
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(creds)
    })
        .then(res => {
            if (res.ok) return res.json();
            throw new Error('Bad Credentials!');
        })
        .then(({ token }) => tokenService.setToken(token));
}
