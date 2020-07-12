import React from "react";
import { View, Button, Text } from "react-native";
import styles from "./styles";

import { UseAuth } from "../../contexts/auth";
import { RouteProp } from '@react-navigation/native';

const Logout: React.FC = () => {
    const { usuario, deslogar } = UseAuth();

    return (
        <View style={styles.container}>
            <Text>{usuario?.nome}</Text>
            <Button title="Logout" onPress={deslogar} />
        </View>
    )
};

export default Logout;