import { createStore, combineReducers } from "redux";
import reducer from "../reducers/reducer";

export default () => {
    const store = createStore(
        combineReducers({
            reducer
        })
    );

    return store;
}
