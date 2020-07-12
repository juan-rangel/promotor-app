export enum TypeLojas  {
    LOAD_REQUEST = '@lojas/LOAD_REQUEST',
    LOAD_SUCCESS = '@lojas/LOAD_SUCCESS',
    LOAD_FAILURE = '@lojas/LOAD_FAILURE',
}

export interface ILoja {
    id: number,
    nome: string,
    name: string,
}

export interface IStateLojas {
    readonly data: ILoja[],
    readonly loading: boolean,
    readonly error: boolean,
}