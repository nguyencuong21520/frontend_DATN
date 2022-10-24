import { User } from "../../global/interface";

export const SET_INFO_USER = 'SET_INFO_USER';

export const SetDataUser = (payload: User) => {
    return {
        type: SET_INFO_USER,
        payload
    }
}