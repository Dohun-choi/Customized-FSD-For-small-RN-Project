import { Text } from "react-native";

const Backyard: React.FC<RootScreenProp<"backyard">> = ({ route }) => {
	return (
		<>
			{route.params?.stuff ? (
				<Text>뒷마당에 둔 물건: {route.params.stuff}</Text>
			) : (
				<Text>아무것도 들고 오지 않았습니다.</Text>
			)}
		</>
	);
};

export default Backyard;
