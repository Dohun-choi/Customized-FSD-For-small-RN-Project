import { NavigationContainer } from "@react-navigation/native";

import { Tab } from "./reactNavigations";
import HomeNav from "./HomeNav";

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
