import { call, put } from "redux-saga/effects";
import httpClient from "./axios";

const queryData = async (uri?: string) => {
    // call api
    const response = await httpClient.get(uri as string);
    return response;
}
export function* watchRequest(uri?: string, success?: string, failed?: string): Generator {
    try {
        const response = yield call(queryData, uri);
        if (response) {
            yield put({ payload: response, type: success as string });
        } else {
            yield put({ type: failed });
        }

    } catch (error) {
        yield put({ type: failed });
    }
}