import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import StorySelectionScreen from "../screens/StorySelectionScreen";
import InputScreen from "../screens/InputScreen";
import { RootStackParamList } from "../types";
import StoryScreen from "../screens/StoryScreen";
import { useColorScheme } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
	const colorScheme = useColorScheme();
	
	return (
		<NavigationContainer theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="StorySelection" component={StorySelectionScreen} />
				<Stack.Screen name="Input" component={InputScreen} />
				<Stack.Screen name="Story" component={StoryScreen} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

export default AppNavigator;