import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import { HomeParamList } from "./Navigation/HomeNav";
import { RootParamList } from "./Navigation/AppNav";
import { BackyardParamList } from "./Navigation/BackyardNav";

type ScreenParamList = RootParamList & HomeParamList & BackyardParamList;

type Route<T extends keyof ScreenParamList> = RouteProp<ScreenParamList, T>;

declare global {
	type Navigation<T extends keyof ScreenParamList> = NativeStackNavigationProp<
		ScreenParamList,
		T
	>;
	interface RootScreenProp<T extends keyof ScreenParamList> {
		navigation: NativeStackNavigationProp<ScreenParamList, T>;
		route: Route<T>;
	}
}
