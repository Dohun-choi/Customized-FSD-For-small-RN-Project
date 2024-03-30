import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeNav, { HomeParamList } from "./HomeNav";
import BackyardNav, { BackyardParamList } from "./BackyardNav";

type NavigationParams<T extends Record<string, object | undefined>> = {
	screen: keyof T;
	params: T[keyof T];
};

export type RootParamList = {
	homeTab: NavigationParams<HomeParamList>;
	backyardTab: NavigationParams<BackyardParamList>;
};

const Tab = createBottomTabNavigator<RootParamList>();

const AppNav = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false, lazy: false }}>
				<Tab.Screen name="homeTab" component={HomeNav} />
				<Tab.Screen name="backyardTab" component={BackyardNav} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default AppNav;
