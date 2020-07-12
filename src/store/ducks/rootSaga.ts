import { all, takeLatest } from "redux-saga/effects";

import { TypeLojas } from "./lojas/types";
import { buscarLojas } from "./lojas/sagas";

export default function* rootSaga() {
    return yield all([
        takeLatest(TypeLojas.LOAD_REQUEST, buscarLojas),
    ]);
}