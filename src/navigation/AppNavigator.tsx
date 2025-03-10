import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import StorySelectionScreen from "../screens/StorySelectionScreen";
import InputScreen from "../screens/InputScreen";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="StorySelection" component={StorySelectionScreen} />
				<Stack.Screen name="Input" component={InputScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}