import React from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import { LogoComponent } from "../logo";;
import styles from "./styles";


export function LoginFormComponent(props: ILoginFormProps): JSX.Element {
    const { nome } = props;

    return (
        <View>
            <LogoComponent />
            <View style={{
                marginBottom: 20
            }}>
                <Text style={styles.titulo}>Olá, {nome}!</Text>
                <Text style={styles.titulo}>Que bom te receber de volta!</Text>
            </View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} secureTextEntry={true} />
            <Button color="#039654" title='🛒 Entrar 🛒' onPress={() => ''}></Button>
        </View>
    );
}

interface ILoginFormProps {
    nome: string;
}