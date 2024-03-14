import React from "react";

import { StyleSheet, Text } from "react-native";
import { Example } from "../../components";

// React.FC<RootRouteProp<"현재스크린이름">>
const ExampleScreen: React.FC<RootRouteProp<"example">> = ({ route }) => {
	return (
		<>
			<Example />
			<Text>{route.params.text}</Text>
		</>
	);
};

export default ExampleScreen;

const styles = StyleSheet.create({});
