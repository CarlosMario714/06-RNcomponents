import React, { useRef } from "react";
import { View, StyleSheet, Animated, Button, Easing } from "react-native";
import { useAnimation } from "../hooks/useAnimation";

export const Animation101Screen = () => {
	const { opacity, position, fadeIn, fadeOut, startMovingPosition } =
		useAnimation();

	return (
		<View style={styles.container}>
			<Animated.View
				style={{
					...styles.purpleBox,
					marginBottom: 20,
					opacity,
					transform: [{ translateY: position }],
				}}
			></Animated.View>

			<Button
				title="FadeIn"
				onPress={() => {
					fadeIn();
					startMovingPosition(100);
				}}
			/>

			<Button title="Fadeout" onPress={fadeOut} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	purpleBox: {
		backgroundColor: "#5856D6",
		width: 150,
		height: 150,
	},
});
