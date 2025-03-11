import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles";
import CustomButton from "../components/CustomButton";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	const { colors } = useTheme();

	return (
		<SafeAreaView style={{...globalStyles.container, backgroundColor: colors.background }}>
			<Text style={{...styles.title, color: colors.text }}>Welcome to Mad Libs!</Text>
			<CustomButton title="Play" onPress={() => navigation.navigate('StorySelection')} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20
	}
})

export default HomeScreen;