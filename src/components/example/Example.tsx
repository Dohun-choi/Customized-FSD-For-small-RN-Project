import { Button, Text } from "react-native";

import { useBears, useBearActions } from "../../shared/";
import UserInterface from "./UI";
import { useNavigation } from "@react-navigation/native";

function Example() {
	const bears = useBears();
	const bearActions = useBearActions();

	const navigation = useNavigation<Navigation>();
	function hanldePress() {
		navigation.navigate("example", { text: "adw" });
	}

	return (
		<>
			<UserInterface>
				<Text testID="bearValue">{bears}</Text>
				<Button
					testID="bearButton"
					title="증가"
					onPress={() => {
						return bearActions.increasePopulation(1);
					}}
				/>
			</UserInterface>
			<Button onPress={hanldePress} title="example로 이동하며 단어 바꾸기" />;
		</>
	);
}

export default Example;
