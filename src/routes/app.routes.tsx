import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../pages/Logout";
import LojasLista from "../pages/Lojas";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Lojas" component={LojasLista} />
  </AppStack.Navigator>
);

export default AppRoutes;
