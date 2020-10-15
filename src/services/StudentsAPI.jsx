import tokenService from '../utils/tokenService';
const BASE_URL = '/api/students';

export function getAll() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

export function create(student) {
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

export function update(student) {
    return fetch(`${BASE_URL}/${student._id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + tokenService.getToken()
        },
        body: JSON.stringify(student)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer' + tokenService.getToken()
        }
    }).then(res => res.json());
}

