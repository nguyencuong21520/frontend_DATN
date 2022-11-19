import { all, fork } from "redux-saga/effects";
import queryHeader from "../../components/header/saga";


export function* rootSaga() {
    yield all([fork(queryHeader)]);
}