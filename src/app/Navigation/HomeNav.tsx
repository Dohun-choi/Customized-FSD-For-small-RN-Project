import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ExampleScreen, HomeScreen } from "../../screens";

export type HomeParamList = {
	home: undefined;
	example: { text: string };
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
			<Stack.Screen name="example" component={ExampleScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeNav;

const styles = StyleSheet.create({});
