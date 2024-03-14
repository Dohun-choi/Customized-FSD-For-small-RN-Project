import React from "react";

import { StyleSheet, Text } from "react-native";
import { Example } from "../../components";

// Index를 통해 내보내고 해당 타입으로 네비게이션 등록
export type ExampleScreenProps = { text: string };

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
