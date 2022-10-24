import { all, fork } from "redux-saga/effects";
import headerSaga from "../../components/header/saga";


export function* rootSaga() {
    yield all([fork(headerSaga)]);
}