import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNav from "./HomeNav";

export type RootParamList = {
	"0": undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

const AppNav = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="0" component={HomeNav} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
