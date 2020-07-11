import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";

import { UseAuth } from "../../contexts/auth";

const Login: React.FC = () => {
    const { logar } = UseAuth();

    return (
        <View style={styles.container}>
            <Button title="Login" onPress={logar} />
        </View>
    )
};

export default Login;