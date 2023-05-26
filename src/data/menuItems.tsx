import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems: MenuItem[] = [
	{
		name: "animation 101",
		icon: "cube-outline",
		component: "Animation101Screen",
	},
	{
		name: "animation 102",
		icon: "albums-outline",
		component: "Animation102Screen",
	},
	{
		name: "Switches",
		icon: "toggle-outline",
		component: "SwitchScreen",
	},
	{
		name: "Alerts",
		icon: "alert-circle-outline",
		component: "AlertScreen",
	},
	{
		name: "TextInputs",
		icon: "document-text-outline",
		component: "TextInputScreen",
	},
	{
		name: "Pull to refresh",
		icon: "refresh-outline",
		component: "PullToRefreshScreen",
	},
	{
		name: "Section List",
		icon: "list-outline",
		component: "CustomSectionListScreen",
	},
	{
		name: "Modal Screen",
		icon: "copy-outline",
		component: "ModalScreen",
	},
	{
		name: "Infinite Scroll",
		icon: "download-outline",
		component: "InfiniteScrollScreen",
	},
	{
		name: "Slides",
		icon: "flower-outline",
		component: "SlidesScreen",
	},
	{
		name: "Themes",
		icon: "flask-outline",
		component: "ChangeThemeScreen",
	},
];
