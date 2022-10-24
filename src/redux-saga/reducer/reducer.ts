import { AnyAction, combineReducers, Reducer } from 'redux';
import TestReducer from '../../components/header/reducer';
import { UserReducer } from '../../components/Login/reducer';

const state = combineReducers({
    Test: TestReducer,
    User: UserReducer
});
export type State = ReturnType<typeof state>
const rootReducer: Reducer = (currentState: State, action: AnyAction) => {
    return state(currentState, action as unknown as never)
}
export default rootReducer;