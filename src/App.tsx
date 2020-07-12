import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from "react-redux";

import { AuthProvider } from "./contexts/auth";
import Routes from "./routes"
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App;