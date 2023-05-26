import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { styles } from "../theme/appTheme";
import { useForm } from "../hooks/useForm";
import { Text } from "react-native";
import { CustomSwitch } from "../components/CustomSwitch";

export const TextInputScreen = () => {
	const { form, onChange, isSuscribed } = useForm({
		name: "",
		email: "",
		phone: "",
		isSuscribed: false,
	});

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.globalMargin}>
						<HeaderTitle title="TextInputs" />

						<TextInput
							style={stylesScreen.inputStyle}
							placeholder="ingrese su nombre"
							autoCorrect={false}
							autoCapitalize="words"
							onChangeText={(value) => onChange(value, "name")}
						/>

						<TextInput
							style={stylesScreen.inputStyle}
							placeholder="ingrese email"
							autoCorrect={false}
							autoCapitalize="none"
							onChangeText={(value) => onChange(value, "email")}
							keyboardType="email-address"
							keyboardAppearance="dark"
						/>

						<View style={stylesScreen.switchRow}>
							<Text>Suscribirme</Text>

							<CustomSwitch
								isOn={isSuscribed}
								onChange={(value) => onChange(value, "isSuscribed")}
							/>
						</View>

						<HeaderTitle title={JSON.stringify(form, null, 3)} />

						<HeaderTitle title={JSON.stringify(form, null, 3)} />

						<TextInput
							style={stylesScreen.inputStyle}
							placeholder="ingrese su telefono"
							onChangeText={(value) => onChange(value, "phone")}
							keyboardType="phone-pad"
						/>
					</View>
				</TouchableWithoutFeedback>

				<View style={{ height: 100 }} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

const stylesScreen = StyleSheet.create({
	inputStyle: {
		borderWidth: 1,
		borderColor: "#5856D6",
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginVertical: 10,
	},
	switchRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	switchText: {
		fontSize: 25,
	},
});
