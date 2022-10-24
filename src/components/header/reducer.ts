import { Action } from "../../global/interface";
import { GET_DATA, REQUEST_API } from "./actions";

// example APIs Redux-Saga
const TestReducer = (state: Array<string> | null = null, action: Action) => {
    switch (action.type) {
        case REQUEST_API:
            return null;
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
}
export default TestReducer;