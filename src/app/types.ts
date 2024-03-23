import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeParamList } from "./Navigation/HomeNav";
import { RootParamList } from "./Navigation/AppNav";
import { RouteProp as A } from "@react-navigation/native";

type NativeStackParamList = RootParamList & HomeParamList;

type Route<T extends keyof NativeStackParamList> = A<NativeStackParamList, T>;

declare global {
	type Navigation = NativeStackNavigationProp<NativeStackParamList>;
	interface RootRouteProp<T extends keyof NativeStackParamList> {
		route: Route<T>;
	}
	interface RootNavigationProp {
		navigation: NativeStackNavigationProp<NativeStackParamList>;
	}
	interface RootScreenProp<T extends keyof NativeStackParamList> {
		navigation: NativeStackNavigationProp<NativeStackParamList>;
		route: Route<T>;
	}
}
