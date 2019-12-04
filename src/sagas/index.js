import { all } from "redux-saga/effects";
import usersSagas from "./book";


export default function* rootSaga(){
    yield all([
        ...usersSagas
    ])
}