import { AnyAction, combineReducers, Reducer } from 'redux';
import UserReducer from '../../components/Login/reducer';

const state = combineReducers({
    User: UserReducer
});
export type State = ReturnType<typeof state>
const rootReducer: Reducer = (currentState: State, action: AnyAction) => {
    return state(currentState, action as unknown as never)
}
export default rootReducer;