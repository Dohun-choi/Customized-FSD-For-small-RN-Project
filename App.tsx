import AppMain from "./src/app/AppMain";
import { StatusBar } from "expo-status-bar";

function App() {
	return (
		<>
			<StatusBar style="auto" />
			<AppMain />
		</>
	);
}

const AppEntryPoint = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED
	? require("./.storybook").default
	: App;

export default AppEntryPoint;
