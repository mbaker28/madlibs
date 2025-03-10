import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome to Mad Libs!</Text>
			<Button title="Start a New Story" onPress={() => navigation.navigate('StorySelection')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20
	}
})

export default HomeScreen;