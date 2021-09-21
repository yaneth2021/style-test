import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../../screens/pscreen/example2";
import SecondScreen from "../../screens/sscreen/example4";

const Stack = createStackNavigator();

const headerOptions = { headerShown: false };

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="pscreen">
      <Stack.Screen
        name="pscreen"
        options={headerOptions}
        component={PscreenStack}
      />
      <Stack.Screen
        name="sscreen"
        options={headerOptions}
        component={SscreenStack}
      />
    </Stack.Navigator>
  );
};

const PscreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="example2">
      <Stack.Screen name="example2" component={FirstScreen} />
    </Stack.Navigator>
  );
};

const SscreenStack = () => {
  return (
    <Stack.Navigator initialRouteName="example4">
      <Stack.Screen name="example4" component={SecondScreen} />
    </Stack.Navigator>
  );
};
