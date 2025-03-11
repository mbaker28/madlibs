import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { stories } from "../data/stories";
import CustomButton from "../components/CustomButton";
import { useTheme } from "@react-navigation/native";
import globalStyles from "../styles";

type StorySelectionScreenProps = NativeStackScreenProps<RootStackParamList, 'StorySelection'>;

const StorySelectionScreen: React.FC<StorySelectionScreenProps> = ({ navigation }) => {
	const { colors } = useTheme();

	return (
		<View style={globalStyles.container}>
			<Text style={{ ...styles.title, color: colors.text }}>Choose a Story</Text>
			{stories.map(story => (
				<CustomButton
					key={story.id}
					title={story.title}
					onPress={() => navigation.navigate('Input', { storyId: story.id })}
				/>
			))}
			<CustomButton title="Go Home" onPress={() => navigation.navigate('Home')} />
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20
	}
});

export default StorySelectionScreen;