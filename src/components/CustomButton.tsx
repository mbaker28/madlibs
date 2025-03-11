import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import React from "react";

type CustomButtonProps = {
	onPress: () => void;
	title: string;
	style?: StyleProp<ViewStyle>
	disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, style, disabled }) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			disabled={disabled}
			style={[style, styles.button, { backgroundColor: colors.primary }, disabled ? (styles.disabledButton) : null ]}
			onPress={onPress}
		>
			<Text style={{ ...styles.buttonLabel, color: colors.text }}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderRadius: 4,
		marginBottom: 6
	},
	buttonLabel: {
		fontSize: 14,
		fontWeight: 600,
		textAlign: 'center'
	},
	disabledButton: {
		opacity: 0.5,
		backgroundColor: 'gray'
	}
});

export default CustomButton;