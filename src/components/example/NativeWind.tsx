import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface Props {
	children: ReactNode;
}

const UserInterface: React.FC<Props> = ({ children }) => {
	return (
		<View className="items-center justify-center bg-white">{children}</View>
	);
};

export default UserInterface;

const styles = StyleSheet.create({
	container: {
		height: "40%",
	},
});
