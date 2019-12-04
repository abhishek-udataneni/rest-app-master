import {takeEvery,call,fork,put,takeLatest,take} from "redux-saga/effects";
import axios from 'axios';


function* getUsers(){
    yield put({type: "GET_USERS"})
    try {
        let response = yield axios.get('https://jsonplaceholder.typicode.com/users')
        yield put({type: "GET_USERS_SUCCESS",response: response.data})
    } catch (error) {
        yield put({type: "GET_USERS_FAIL",error})
    }
}

function* watchGetUsersRequest(){
    yield takeEvery('GET_USERS_REQUEST', getUsers)
}

const usersSagas = [
    fork(watchGetUsersRequest),
]

export default usersSagas;