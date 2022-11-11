import { createReducer } from "../../utils/redux";
export const REQUEST_API = "REQUEST_API";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";

// example APIs Redux-Saga
const TestReducer = createReducer(GET_DATA_SUCCESS, GET_DATA_FAILED, REQUEST_API);
export default TestReducer;