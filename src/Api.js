import axios from 'axios';

const URL = 'http://localhost:3034/students';

export async function postStudentsData(student) {
    return(
        await axios.post(URL,student)
    );
}

export async function getStudentsData() {
    return(
        await axios.get(URL)
    );
}

export async function editStudentsData() {
    return(
        await axios.put(URL)
    );
}

export async function deleteStudentsData(id) {
    return(
        await axios.delete(`${URL}/${id}`)
    );
}