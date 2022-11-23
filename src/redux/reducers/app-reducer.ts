import {getAuthDataThunkCreator} from "./auth-reducer";

const TOGGLE_INITIALIZATION = 'app/TOGGLE_INITIALIZATION';

type InitialStateType = {
    isInitialized: boolean
};
const initialState: InitialStateType = {
    isInitialized: false
};

type AppReducerActionType = {
    type: typeof TOGGLE_INITIALIZATION
    isInitialized: boolean
};
const appReducer = (state = initialState, action: AppReducerActionType):InitialStateType => {
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

export const toggleInitialization = (isInitialized: boolean):AppReducerActionType => ({type: TOGGLE_INITIALIZATION, isInitialized: isInitialized});

export const toggleInitializationThunkCreator = () => {
    return (dispatch: any) => {
        const promise = dispatch(getAuthDataThunkCreator());
        promise.then(() => dispatch(toggleInitialization(true)));
    };
};

export default appReducer;