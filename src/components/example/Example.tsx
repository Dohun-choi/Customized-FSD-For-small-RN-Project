import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useBears, useBearActions } from "../../shared/";
import UserInterface from "./UI";

function Example() {
	const bears = useBears();
	const bearActions = useBearActions();

	const navigation = useNavigation<Navigation>();
	function handlePress() {
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
						bearActions.increasePopulation(1);
					}}
				/>
			</UserInterface>
			<Button title="이동" onPress={handlePress} />
		</>
	);
}

export default Example;
