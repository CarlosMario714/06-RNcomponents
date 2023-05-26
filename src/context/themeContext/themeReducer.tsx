import { StackRouterOptions, Theme } from "@react-navigation/native";

type ThemeAction = { type: "set_light_theme" } | { type: "set_dark_theme" };

export interface ThemeState extends Theme {
	currentTheme: "light" | "dark";
	divideColor: String;
}

export const lightTheme: ThemeState = {
	currentTheme: "light",
	dark: false,
	divideColor: "rgba(0, 0, 0, 0.7)",
	colors: {
		primary: "red",
		background: "white",
		card: "green",
		text: "black",
		border: "orange",
		notification: "teal",
	},
};

export const darkTheme: ThemeState = {
	currentTheme: "dark",
	dark: true,
	divideColor: "rgba(0, 0, 0, 0.7)",
	colors: {
		primary: "#75CEDB",
		background: "black",
		card: "green",
		text: "white",
		border: "orange",
		notification: "teal",
	},
};

export const themeReducer = (
	state: ThemeState,
	action: ThemeAction
): ThemeState => {
	switch (action.type) {
		case "set_light_theme":
			return { ...lightTheme };

		case "set_dark_theme":
			return { ...darkTheme };

		default:
			return state;
	}
};
