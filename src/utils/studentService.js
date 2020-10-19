import tokenService from './tokenService';
const BASE_URL = '/api/students';


export function getAll() {
    return fetch(BASE_URL)
        .then(res => res.json());
}

export function index() {
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

export function create(student) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(student)
    }).then(res => res.json());
}

export function update(student) {
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

export function deleteOne(student) {
    return fetch(`${BASE_URL}/${student._id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            // Add this header - don't forget the space after Bearer
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => res.json());
}