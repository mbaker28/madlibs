import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, WordInput } from '../types';
import { stories } from '../data/stories';

type InputScreenProps = NativeStackScreenProps<RootStackParamList, 'Input'>;

const InputScreen: React.FC<InputScreenProps> = ({ navigation, route }) => {
	const { storyId } = route.params;
	const selectedStory = stories.find(story => story.id === storyId);

	if (!selectedStory) {
		return <Text>Story not found!</Text>;
	}

	const [inputIndex, setInputIndex] = useState<number>(0);
	const [inputs, setInputs] = useState<WordInput[]>([]);

	const handleNext = () => {
		if (inputIndex < selectedStory.placeholders.length - 1) {
			setInputIndex(inputIndex + 1);
		} else {
			navigation.navigate('Story', { storyId, words: inputs });
		}
	};

	const handlePrev = () => {
		setInputIndex(inputIndex - 1);
	};

	const handleChange = (text: string) => {
		const currentPlaceholder = selectedStory.placeholders[inputIndex];
		const newInputs = [...inputs];
		newInputs[inputIndex] = { type: currentPlaceholder, text };

		setInputs(newInputs);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Enter a(n) {selectedStory.placeholders[inputIndex]}:</Text>
			<TextInput
				style={styles.input}
				onChangeText={handleChange}
				value={inputs[inputIndex]?.text || ''}
			/>
			<Button title="Previous" disabled={inputIndex === 0} onPress={handlePrev} />
			<Button title={inputIndex === selectedStory.placeholders.length - 1 ? 'Create Story' : 'Next'} onPress={handleNext} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center'
	},
	label: {
		fontSize: 18,
		marginBottom: 10
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		padding: 10,
		marginBottom: 20,
		borderRadius: 5
	}
});

export default InputScreen;