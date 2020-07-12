import { call, put } from "redux-saga/effects";

import api from "../../../services/api";
import { ActionLoadSuccess, ActionLoadFailure } from "./actions";

export function* buscarLojas() {
    try {
        const response = yield call(api.get, 'users/juanito-jones/repos');
        yield put(ActionLoadSuccess(response.data));
    } catch (err) {
        yield put(ActionLoadFailure());
    }
}