import React from 'react';
import { Image } from 'react-native';
import styles from "./styles";

export function LogoComponent(): JSX.Element {
    return (
        <Image
            style={styles.logoPequena}
            source={require('../../assets/logo-promolate.jpeg')}
        />
    );
}