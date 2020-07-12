import { Reducer } from "redux";
import { IStateLojas, TypeLojas } from "./types";

const STATE_INICIAL: IStateLojas = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<IStateLojas> = (state = STATE_INICIAL, action) => {
    
    switch (action.type) {
        case TypeLojas.LOAD_REQUEST:
            return { ...state, loading: true };
        case TypeLojas.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case TypeLojas.LOAD_FAILURE:
            return { ...state, loading: false, error: true, data: [] };

        default:
            return state;
    }
}

export default reducer;