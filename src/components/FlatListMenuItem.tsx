import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "../interfaces/appInterfaces";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";
import { ThemeContext } from "../context/themeContext/ThemeContext";

interface Props {
	menuItem: MenuItem;
}

export const FlatListMenuItem = ({ menuItem }: Props) => {
	const navigation = useNavigation();
	const {
		theme: { colors },
	} = useContext(ThemeContext);

	// const setRoute = () => {
	// 	switch (menuItem.component) {
	// 		case "Animation101Screen":
	// 			return "Animation101Screen";
	// 		case "Animation102Screen":
	// 			return "Animation102Screen";
	// 		default:
	// 			return "HomeScreen"
	// 	}
	// };

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			onPress={() => navigation.navigate(menuItem.component as never)}
		>
			<View style={styles.container}>
				<Icon name={menuItem.icon} color={colors.primary} size={25} />

				<Text style={styles.itemText}>{menuItem.name}</Text>

				<View style={{ flex: 1 }} />

				<Icon name="chevron-forward-outline" color={colors.primary} size={25} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	itemText: {
		marginLeft: 10,
		fontSize: 18,
	},
});
