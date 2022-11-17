import { Action } from "../../global/interface";
import { State } from "../../redux-saga/reducer/reducer"

export const HeaderSelector = (state: State) => state.Test;

export const GetData = (payload: Action) => {
    return {
        type: payload.type,
        payload: payload
    }
}
