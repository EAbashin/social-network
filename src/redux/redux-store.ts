import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import navbarReducer from "./reducers/navbar-reducer";
import profileReducer from "./reducers/profile-reducer";
import messagesReducer from "./reducers/messages-reducer";
import usersReducer from "./reducers/users-reducer";
import authReducer from "./reducers/auth-reducer";
import appReducer from "./reducers/app-reducer";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    navbar: navbarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
});
type RootReducerType = typeof rootReducer;
export type StateType = ReturnType<RootReducerType>;

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;