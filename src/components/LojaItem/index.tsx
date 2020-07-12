import React, { useState } from "react";
import { Text } from "react-native";

import { ILoja } from "../../store/ducks/lojas/types";

interface OwnProps {
    loja: ILoja,
}

export function LojaItem({ loja }: OwnProps): JSX.Element {
    return <Text>{loja.name}</Text>
}