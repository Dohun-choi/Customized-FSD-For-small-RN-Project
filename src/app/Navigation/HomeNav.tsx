import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RoomScreen, HomeScreen } from "../../screens";

export type HomeParamList = {
	home: undefined;
	room: { stuff: string };
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerTitle: "집" }}>
			<Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
			<Stack.Screen name="room" component={RoomScreen}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default HomeNav;
