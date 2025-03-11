import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
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
			<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
				<View>
					<Text style={{ ...styles.title, color: colors.text }}>Choose a Story</Text>
				</View>
				{stories.map(story => (
					<CustomButton
						key={story.id}
						title={story.title}
						onPress={() => navigation.navigate('Input', { storyId: story.id })}
					/>
				))}
				<CustomButton title="Go Home" onPress={() => navigation.navigate('Home')} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	contentContainer: {
		flexGrow: 1,
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