import React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { stories } from "../data/stories";
import { useTheme } from "@react-navigation/native";
import globalStyles from "../styles";
import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

type StoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Story'>;

const StoryScreen: React.FC<StoryScreenProps> = ({ route, navigation }) => {
	const { colors } = useTheme();

	const { storyId, words } = route.params;
	const selectedStory = stories.find(story => story.id === storyId);

	if (!selectedStory) {
		return <Text style={{ color: colors.text }}>Story not found!</Text>;
	}

	let filledStory = selectedStory.template;
	for (const word of words) {
		filledStory = filledStory.replace(`{${word.type}}`, word.text);
	}

	return (
		<SafeAreaView style={globalStyles.container}>
			<ScrollView style={styles.container} contentContainerStyle={styles.contentConainer}>
				<Text style={{ ...styles.title, color: colors.text }}>{selectedStory.title}</Text>
				<Text style={{ ...styles.storyText, color: colors.text }}>{filledStory}</Text>
				<CustomButton title="Back to Home" onPress={() => navigation.navigate('Home')} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	contentConainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center'
	},
	storyText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'left',
		marginBottom: 20
	}
});

export default StoryScreen;