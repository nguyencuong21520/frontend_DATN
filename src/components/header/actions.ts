import { Obj } from "../../global/interface";
import { State } from "../../redux-saga/reducer/reducer"

export const REQUEST_API = "REQUEST_API";
export const GET_DATA = "GET_DATA";


export const HeaderSelector = (state:State)=> state.Test

export const CallApis = () => {
    return {
        type: REQUEST_API
    }
}
export const GetData = (payload: Array<Obj>) => {
    return {
        payload: payload,
        type: GET_DATA
    }
}