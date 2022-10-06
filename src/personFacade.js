const makeOptions = (method, body) => {
    const opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body)
    }
    return opts
}

const handleHttpErrors = (res) => {
    if (!res.ok) {
        return Promise.reject({
            status: res.status,
            fullError: res.json()
        })
    }
    return res.json()
}

const getAllPersons = () => {
    return fetch("https://cphcn332.dk/ca1_application/api/person")
        .then(handleHttpErrors)
}
const getPersonById = (id) => {
    return fetch("https://cphcn332.dk/ca1_application/api/person/${id}")
        .then(handleHttpErrors)
}
const getPersonByPhoneNumber = (number) => {
    return fetch("https://cphcn332.dk/ca1_application/api/phone/${number}")
        .then(handleHttpErrors)
}
const getPeopleWithSpecificHobby = (hobbyName) => {
    return fetch("https://cphcn332.dk/ca1_application/api/hobby/{description}")
        .then(handleHttpErrors)
}
const getPeopleInSpecificZipCode = (zipcode) => {
    return fetch("https://cphcn332.dk/ca1_application/api/cityinfo/{zipCode}")
        .then(handleHttpErrors)
}
const createPerson = (person) => {
    const create = makeOptions("POST",person)
    return fetch("https://cphcn332.dk/ca1_application/api/person",create)
        .then(handleHttpErrors)
}
const editPerson = (person) => {
    const update = makeOptions("PUT",person)
    return fetch ("https://cphcn332.dk/ca1_application/api/person/{id}",update)
        .then(handleHttpErrors)
}
const deletePerson = (person) => {
    const remove = makeOptions("DELETE",person)
    return fetch ("https://cphcn332.dk/ca1_application/api/person/{id}",remove)
}


const personFacade = {
    getAllPersons,
    getPersonById,
    getPersonByPhoneNumber,
    getPeopleWithSpecificHobby,
    getPeopleInSpecificZipCode,
    createPerson,
    editPerson,
    deletePerson
}

export default personFacade