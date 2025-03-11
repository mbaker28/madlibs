import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, WordInput } from '../types';
import { stories } from '../data/stories';
import globalStyles from '../styles';
import { useTheme } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';

type InputScreenProps = NativeStackScreenProps<RootStackParamList, 'Input'>;

const InputScreen: React.FC<InputScreenProps> = ({ navigation, route }) => {
	const { colors } = useTheme();

	const { storyId } = route.params;
	const selectedStory = stories.find(story => story.id === storyId);

	if (!selectedStory) {
		return <Text style={{ color: colors.text }}>Story not found!</Text>;
	}

	const [inputIndex, setInputIndex] = useState<number>(0);
	const [inputs, setInputs] = useState<WordInput[]>([]);

	const placeholders: string[] = [];
	for (const match of selectedStory.template.matchAll(/{([^}]+)}/g)) {
		placeholders.push(match[1]);
	}

	const handleNext = () => {
		if (inputIndex < placeholders.length - 1) {
			setInputIndex(inputIndex + 1);
		} else {
			navigation.navigate('Story', { storyId, words: inputs });
		}
	};

	const handlePrev = () => {
		setInputIndex(inputIndex - 1);
	};

	const handleChange = (text: string) => {
		const currentPlaceholder = placeholders[inputIndex];
		const newInputs = [...inputs];
		newInputs[inputIndex] = { type: currentPlaceholder, text };

		setInputs(newInputs);
	};

	return (
		<SafeAreaView style={globalStyles.container}>
			<View style={{ minWidth: '75%' }}>
				<Text style={{...styles.label, color: colors.text }}>Enter a(n) {placeholders[inputIndex]}:</Text>
				<TextInput
					style={{...styles.input, borderColor: colors.border, color: colors.text }}
					onChangeText={handleChange}
					value={inputs[inputIndex]?.text || ''}
				/>
				<View style={styles.buttonContainer}>
					<CustomButton style={{ flex: 1 }} title="Previous" disabled={inputIndex === 0} onPress={handlePrev} />
					<CustomButton style={{ flex: 1 }} disabled={!inputs[inputIndex]?.text} title={inputIndex === placeholders.length - 1 ? 'Create Story' : 'Next'} onPress={handleNext} />
				</View>
				<View>
					<Text style={{ color: colors.text }}>{placeholders.length - inputIndex} word{placeholders.length - inputIndex > 1 ? 's' : ''} left</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	label: {
		fontSize: 18,
		marginBottom: 10
	},
	input: {
		borderWidth: 1,
		padding: 10,
		marginBottom: 20,
		borderRadius: 5
	},
	buttonContainer: {
		flexDirection: 'row',
		gap: 10
	}
});

export default InputScreen;