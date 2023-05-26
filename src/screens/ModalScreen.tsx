import React from "react";
import { View, Button, Modal, Text } from "react-native";
import { styles } from "../theme/appTheme";
import { HeaderTitle } from "../components/HeaderTitle";
import { useState } from "react";

export const ModalScreen = () => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title="Modal Screen" />

			<Button title="Abrir modal" onPress={() => setIsVisible(true)} />

			<Modal animationType="fade" visible={isVisible} transparent={true}>
				{/* background negro */}
				<View
					style={{
						flex: 1,
						backgroundColor: "rgba(0,0,0, 0.3)",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{/* contenido del modal */}
					<View
						style={{
							backgroundColor: "#5856D6",
							width: 200,
							height: 200,
							justifyContent: "center",
							alignItems: "center",
							shadowOffset: { width: 0, height: 10 },
							shadowOpacity: 0.25,
							elevation: 10,
							borderRadius: 10,
						}}
					>
						<Text style={{ fontSize: 20, fontWeight: "bold" }}>Modal</Text>

						<Text style={{ fontSize: 16, fontWeight: "300", marginBottom: 20 }}>
							cuerpo del modal
						</Text>

						<Button title="Cerrar" onPress={() => setIsVisible(false)} />
					</View>
				</View>
			</Modal>
		</View>
	);
};
