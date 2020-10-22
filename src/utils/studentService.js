import tokenService from './tokenService';

const BASE_URL = '/api/students';

export function create(student) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(student)
    }).then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => res.json());
}

export function update(student) {
    return fetch(`${BASE_URL}/${student._id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(student)
    }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}


function show(students) {
    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(students)
    };
    return fetch(BASE_URL, options).then(res => res.json());
}

export default {
    create,
    getAll,
    index,
    show,
    update,
    deleteOne
};