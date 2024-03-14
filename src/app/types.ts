import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeParamList } from "./Navigation/HomeNav";
import { RootParamList } from "./Navigation/AppNav";
import { RouteProp as A } from "@react-navigation/native";

type NativeStackParamList = RootParamList & HomeParamList;

type RootScreenType = {
	[key in keyof NativeStackParamList]: NativeStackParamList[key];
};
type Route<T extends keyof RootScreenType> = A<RootScreenType, T>;

declare global {
	type Navigation = NativeStackNavigationProp<RootScreenType>;
	interface RootRouteProp<T extends keyof RootScreenType> {
		route: Route<T>;
	}
	interface RootNavigaionProp {
		navigation: NativeStackNavigationProp<RootScreenType>;
	}
	interface RootScreenProp<T extends keyof RootScreenType> {
		navigation: NativeStackNavigationProp<RootScreenType>;
		route: Route<T>;
	}
}
