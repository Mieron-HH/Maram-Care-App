import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// importing navigations
import FirstOnboard from "../navigations/Onboarding/first-onboard";
import SecondOnboard from "../navigations/Onboarding/second-onboard";
import ThirdOnboard from "../navigations/Onboarding/third-onboard";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
	responsiveWidth,
} from "../services/dimensions";

// importing states
import {
	selectFirstRouteActive,
	selectSecondRouteActive,
	selectThirdRouteActive,
	selectDisplayButton,
} from "../slices/onboarding-slice.js";

const Tab = createMaterialTopTabNavigator();

const OnboardingScreen = () => {
	const navigator = useNavigation();

	const firstRouteActive = useSelector(selectFirstRouteActive);
	const secondRouteActive = useSelector(selectSecondRouteActive);
	const thirdRouteActive = useSelector(selectThirdRouteActive);
	const displayButton = useSelector(selectDisplayButton);

	return (
		<Container>
			<CustomNavigationContainer>
				<Tab.Navigator
					initialRoute="FirstOnboard"
					screenOptions={{
						headerShown: false,
						tabBarStyle: { height: 0 },
						style: { background: "transparent" },
					}}
					lazyBehavior="default">
					<Tab.Screen name="FirstOnboard" component={FirstOnboard} />
					<Tab.Screen name="SecondOnboard" component={SecondOnboard} />
					<Tab.Screen name="ThirdOnboard" component={ThirdOnboard} />
				</Tab.Navigator>
			</CustomNavigationContainer>
			<NavigationIndicatorsContainer>
				<NavigationIndicator
					style={{
						backgroundColor: firstRouteActive ? "#5e41e0" : "lightgray",
					}}
				/>
				<NavigationIndicator
					style={{
						backgroundColor: secondRouteActive ? "#5e41e0" : "lightgray",
					}}
				/>
				<NavigationIndicator
					style={{
						backgroundColor: thirdRouteActive ? "#5e41e0" : "lightgray",
					}}
				/>
			</NavigationIndicatorsContainer>
			{displayButton && (
				<GetStartedButton onPress={() => navigator.replace("LoginScreen")}>
					<Text
						style={{ color: "white", fontSize: 23, fontWeight: "bold" }}>
						Get Started!
					</Text>
				</GetStartedButton>
			)}
		</Container>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({});

const Container = styled.View`
	width: 100%;
	height: 100%;
	padding-top: ${responsiveHeight(5)}px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const CustomNavigationContainer = styled.View`
	width: ${responsiveWidth(100)}px;
	height: ${responsiveHeight(75)}px;
`;

const NavigationIndicatorsContainer = styled.View`
	width: 45px;
	height: ${responsiveHeight(1.5)}px;
	margin-top: ${responsiveHeight(5)}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const NavigationIndicator = styled.View`
	width: 8px;
	height: 8px;
	border-radius: 100%;
`;

const GetStartedButton = styled.TouchableOpacity`
	width: ${percentageCalculation(190, 190)}px;
	height: 50px;
	margin-top: 20px;
	background-color: #5e41e0;
	border-radius: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
