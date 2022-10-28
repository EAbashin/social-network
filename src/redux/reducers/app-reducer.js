import {getAuthDataThunkCreator} from "./auth-reducer";

const
    TOGGLE_INITIALIZATION = 'app/TOGGLE_INITIALIZATION';

const initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_INITIALIZATION: {
            return {
                ...state,
                isInitialized: action.isInitialized
            };
        }
        default:
            return state;
    }
};

export const toggleInitialization = (isInitialized) => ({type: TOGGLE_INITIALIZATION, isInitialized: isInitialized});

export const toggleInitializationThunkCreator = () => {
    return (dispatch) => {
        const promise = dispatch(getAuthDataThunkCreator());
        promise.then(() => dispatch(toggleInitialization(true)));
    };
};

export default appReducer;