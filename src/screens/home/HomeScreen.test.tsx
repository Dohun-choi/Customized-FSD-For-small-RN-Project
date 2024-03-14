import React from "react";
import "@testing-library/jest-native/";
import { render, fireEvent } from "@testing-library/react-native";
import "@react-navigation/native";

import HomeScreen from "./HomeScreen";

// 외부 라이브러리 mocking
jest.mock("@react-navigation/native");

describe("Example component 렌더링 확인", () => {
	it("초기 베어 카운트 렌더링", () => {
		const { getByText } = render(<HomeScreen />);
		expect(getByText("0")).toBeTruthy(); // 초기 값은 0이다.
	});

	it("버튼을 누르면 bear 값이 1 증가한다", () => {
		const { getByTestId } = render(<HomeScreen />);

		const button = getByTestId("bearButton"); // 눌러야 할 버튼
		const bearValue = getByTestId("bearValue"); // 올라야될 값을 가진 JSX 엘리먼트, 초기값은 0

		fireEvent(button, "onPress"); // 버튼을 누르면 1 증가

		expect(bearValue.children[0]).toBe("1");
	});
});
