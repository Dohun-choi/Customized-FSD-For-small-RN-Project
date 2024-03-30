import React from "react";

import { StyleSheet, Text } from "react-native";
import { Example } from "../../components";

const ExampleScreen: React.FC<RootScreenProp<"room">> = ({ route }) => {
	const { stuff } = route.params;
	return (
		<>
			<Example />
			<Text>가지고 온 것: {stuff || "없음"}</Text>
		</>
	);
};

export default ExampleScreen;

const styles = StyleSheet.create({});
