import React from "react";
import { UseAuth } from "../contexts/auth";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { View, ActivityIndicator } from "react-native";

const Routes: React.FC = () => {
    const { logado, loading } = UseAuth();

    // if (loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //             <ActivityIndicator size='large' color='#666' />
    //         </View>
    //     );
    // }

    return logado ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;