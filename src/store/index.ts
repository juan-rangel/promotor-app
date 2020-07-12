import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga"

import { IStateLojas } from "./ducks/lojas/types";
import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface IApplicationState {
    lojas: IStateLojas
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<IApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;