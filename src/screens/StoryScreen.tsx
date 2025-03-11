import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { stories } from "../data/stories";

type StoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Story'>;

const StoryScreen: React.FC<StoryScreenProps> = ({ route, navigation }) => {
	const { storyId, words } = route.params;
	const selectedStory = stories.find(story => story.id === storyId);

	if (!selectedStory) {
		return <Text>Story not found!</Text>;
	}

	let filledStory = selectedStory.template;
	for (const word of words) {
		filledStory = filledStory.replace(`{${word.type}}`, word.text);
	}

	return (
		<View style={styles.container}>
			<Text style={styles.storyText}>{filledStory}</Text>
			<Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	storyText: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20
	}
});

export default StoryScreen;