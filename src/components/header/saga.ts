import { watchRequest } from "../../utils/saga";
import { all, takeLatest } from 'redux-saga/effects';
import { GET_DATA_SUCCESS, REQUEST_API, GET_DATA_FAILED } from './reducer';

function* headerSaga() {
    yield watchRequest('/todos', GET_DATA_SUCCESS, GET_DATA_FAILED)
}
export default function* queryHeader() {
    yield all([takeLatest(REQUEST_API, headerSaga)]);
}