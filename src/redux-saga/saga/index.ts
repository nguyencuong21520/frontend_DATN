import { all } from "redux-saga/effects";
import queryDataUser from "../../components/Login/saga";

export function* rootSaga() {
    yield all([
        queryDataUser()
    ]);
}