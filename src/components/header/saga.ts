import { Obj } from '../../global/interface';
import httpClient from '../../utils/axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GetData, REQUEST_API } from './actions';


// call api lấy data
const callData = async () => {
    // call api
    const response = await httpClient.get('/todos');
    return response.data;
}

// handle lấy data với saga để cho vào reducer
function* fetchGetData(): Generator {
    try {
        const response = yield call(callData);
        yield put(GetData(response as Array<Obj>));
    } catch (error) {
        console.log(error);
    }
}

function* headerSaga() {
    yield all([takeLatest(REQUEST_API, fetchGetData)]);
}

export default headerSaga;
