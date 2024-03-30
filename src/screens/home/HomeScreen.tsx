import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { Example } from "../../components";

const HomeScreen: React.FC<RootScreenProp<"home">> = ({ navigation }) => {
	const [stuff, setStuff] = useState("");

	const handlePressRoom = () => {
		navigation.navigate("room", { stuff });
	};

	const handlePressBackyard = () => {
		navigation.navigate("backyardTab", {
			screen: "backyard",
			params: { stuff },
		});
	};
	return (
		<>
			<Example />
			<Text>가지고 갈 물건</Text>
			<TextInput
				style={styles.input}
				onChangeText={setStuff.bind(null)}
				value={stuff}
			/>
			<Button title="방으로 가기" onPress={handlePressRoom} />
			<Button title="뒷마당으로 가기" onPress={handlePressBackyard} />
		</>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
	},
});
