import React, { useRef } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import { LogoComponent } from "../logo";;
import styles from "./styles";

import { useHover, useFocus, useActive } from 'react-native-web-hooks';

export function LoginFormComponent(props: ILoginFormProps): JSX.Element {
    const { nome } = props;

    const refLogin = useRef(null);

    const isHoveredLogin = useHover(refLogin);
    const isFocusedLogin = useFocus(refLogin);
    const isActiveLogin = useActive(refLogin);

    console.log(refLogin, isHoveredLogin, isFocusedLogin, isActiveLogin)
    return (
        <View>
            <LogoComponent />
            <View style={{
                marginBottom: 20
            }}>
                <Text style={styles.titulo}>Olá, {nome}!</Text>
                <Text style={styles.titulo}>Que bom te receber de volta!</Text>
            </View>
            <TextInput style={[
                styles.input,
                isHoveredLogin && { backgroundColor: 'fff' },
                isFocusedLogin && { borderTopWidth: 10, borderRightWidth: 1 },
                isActiveLogin && { borderTopWidth: 0 },
            ]} ref={refLogin} />
            <TextInput style={styles.input} secureTextEntry={true} />
            <Button color="#039654" title='🛒 Entrar 🛒' onPress={() => ''}></Button>
        </View>
    );
}

interface ILoginFormProps {
    nome: string;
}