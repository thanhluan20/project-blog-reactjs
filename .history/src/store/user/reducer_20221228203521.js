import { ACCESS_TOKEN } from "../../constants";
import { ATC_LOGIN } from "./action";

const initState = {
    token: localStorage.getItem(ACCESS_TOKEN),
    currentUser: null
}

function reducer(state = initState, action) {
    

    switch (action.type) {
        case ATC_LOGIN:
            const token = action.payload.token;
            localStorage.setItem(ACCESS_TOKEN, token);
            return {
                ...state,
                token: token,
                currentUser: action.payload.currentUser,
            }
            case ATC_LOGOUT:
            localStorage.setItem(ACCESS_TOKEN, token);
            return {
                ...state,
                token: null,
                currentUser: null,
            }
        default:
            return state
    }
}

export default reducer;