import { Action } from "../global/interface";

export const createReducer = (success: string, failed: string, request: string) => {
    return (state: Record<string, unknown> | null = null, action: Action) => {
        switch (action.type) {
            case success:
                return {
                    ...state,
                    success: true,
                    response: action.payload,
                }
            case failed:
                return {
                    ...state,
                    success: false,
                    response: undefined,
                }
            case request:
                return {
                    ...state,
                    ...action.payload,
                    response: null,
                }
            default:
                return state;
        }
    }
}