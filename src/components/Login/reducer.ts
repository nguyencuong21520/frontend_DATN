import { Action, User } from "../../global/interface";
import { SET_INFO_USER } from "./action";

export const UserReducer = (state: User | null = null, action: Action) => {
    switch (action.type) {
        case SET_INFO_USER:
            return action.payload
        default:
            return state
    }
}