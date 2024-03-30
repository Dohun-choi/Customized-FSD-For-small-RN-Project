import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BackyardScreen } from "../../screens";

export type BackyardParamList = {
	backyard: { stuff: string };
};

const Stack = createNativeStackNavigator<BackyardParamList>();

const Backyard = () => {
	return (
		<Stack.Navigator screenOptions={{ headerTitle: "뒷 마당" }}>
			<Stack.Screen name="backyard" component={BackyardScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default Backyard;
