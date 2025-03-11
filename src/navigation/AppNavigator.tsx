import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import StorySelectionScreen from "../screens/StorySelectionScreen";
import InputScreen from "../screens/InputScreen";
import { RootStackParamList } from "../types";
import StoryScreen from "../screens/StoryScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="StorySelection" component={StorySelectionScreen} />
				<Stack.Screen name="Input" component={InputScreen} />
				<Stack.Screen name="Story" component={StoryScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;