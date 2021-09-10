import {combineReducers, createStore} from "redux";
import peopleRightReducer from "./peopleRightMessage-reducer";
import dialogsReducer from "./dialogsMessage-reducer";

let reducers = combineReducers({
    peopleRightMessage: peopleRightReducer,
    dialogsMessage: dialogsReducer
})

let store = createStore(reducers)


export default store;