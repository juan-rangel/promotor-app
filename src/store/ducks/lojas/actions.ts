import { action } from "typesafe-actions";
import { TypeLojas, ILoja } from "./types";

export const ActionLoadRequest = () => action(TypeLojas.LOAD_REQUEST);

export const ActionLoadSuccess = (data: ILoja[]) => action(TypeLojas.LOAD_SUCCESS, { data });

export const ActionLoadFailure = () => action(TypeLojas.LOAD_FAILURE);
