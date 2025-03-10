import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { stories } from "../data/stories";

type StorySelectionScreenProps = NativeStackScreenProps<RootStackParamList, 'StorySelection'>;

const StorySelectionScreen: React.FC<StorySelectionScreenProps> = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Choose a Story</Text>
			{stories.map(story => (
				<Button
					key={story.id}
					title={story.title}
					onPress={() => navigation.navigate('Input', { storyId: story.id })}
				/>
			))}
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
});

export default StorySelectionScreen;