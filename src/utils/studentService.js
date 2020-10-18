
import tokenService from './tokenService';
const BASE_URL = '/api/students/';

export default {
    index,
    create,
    update,
    delete: deleteOne
};

function index() {
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function create(student) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(student)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

function update(student) {
    return fetch(`${BASE_URL}/${student._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(student)
    }).then(res => res.json());
}

function deleteOne(student) {
    return fetch(`${BASE_URL}/${student._id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => res.json());
}