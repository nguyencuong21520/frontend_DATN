import httpClient from '../../utils/axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_DATA_SUCCESS, REQUEST_API, GET_DATA_FAILED } from './reducer';
import { GetData } from './actions';


// call api lấy data
const callData = async () => {
    // call api
    const response = await httpClient.get('/todos');
    return response;
}

// handle lấy data với saga để cho vào reducer
function* fetchGetData(): Generator {
    try {
        const response = yield call(callData);
        if (response) {
            yield put(GetData({ payload: response, type: GET_DATA_SUCCESS }));
        } else {
            yield put(GetData({ type: GET_DATA_FAILED }));
        }

    } catch (error) {
        yield put(GetData({ type: GET_DATA_FAILED }));
    }
}

function* headerSaga() {
    yield all([takeLatest(REQUEST_API, fetchGetData)]);
}

export default headerSaga;
