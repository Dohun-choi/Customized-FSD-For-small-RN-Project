import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useBears, useBearActions } from "../../shared/";
import UserInterface from "./NativeWind";

function Example() {
	const bears = useBears();
	const bearActions = useBearActions();

	const navigation = useNavigation<Navigation<"homeTab">>();

	const handlePress = () => {
		navigation.navigate("backyardTab", {
			screen: "backyard",
			params: { stuff: `숫자 ${bears}` },
		});
	};

	return (
		<UserInterface>
			<Text testID="bearValue">{bears}</Text>
			<Button
				testID="bearButton"
				title="증가"
				onPress={() => {
					bearActions.increasePopulation(1);
				}}
			/>
			<Button title="숫자를 가지고 뒷 마당으로 이동" onPress={handlePress} />
		</UserInterface>
	);
}

export default Example;
