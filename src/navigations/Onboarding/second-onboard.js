import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";

// importing helper functions
import {
	responsiveWidth,
	responsiveHeight,
	percentageCalculation,
} from "../../services/dimensions";

// importing states and actions
import {
	setFirstRouteActive,
	setSecondRouteActive,
	setThirdRouteActive,
} from "../../slices/onboarding-slice";

const SecondOnboard = () => {
	const dispatch = useDispatch();

	useFocusEffect(() => {
		dispatch(setFirstRouteActive(false));
		dispatch(setSecondRouteActive(true));
		dispatch(setThirdRouteActive(false));
	});

	return (
		<Container>
			<OnboardingImageContainer>
				<OnboardingImage
					style={{ resizeMode: "contain" }}
					source={require("../../../assets/onboarding_2.png")}
				/>
			</OnboardingImageContainer>
			<OnboardingMessageContainer>
				<OnboardingMessageTitle>Quality Reputation</OnboardingMessageTitle>
				<OnboardingMessageBody>
					The team of reputable doctors has many years of professional
					experience.
				</OnboardingMessageBody>
			</OnboardingMessageContainer>
		</Container>
	);
};

export default SecondOnboard;

const styles = StyleSheet.create({});

const Container = styled.View`
	width: 100%;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const OnboardingImageContainer = styled.View`
	width: ${responsiveWidth(90)}px;
	height: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OnboardingImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const OnboardingMessageContainer = styled.View`
	width: ${percentageCalculation(185, 185)}px;
	height: ${responsiveHeight(10)}px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const OnboardingMessageTitle = styled.Text`
	font-size: 24px;
	font-weight: 500;
	color: #2e3241;
`;

const OnboardingMessageBody = styled.Text`
	font-size: 18px;
	font-weight: 500;
	color: #7d85a3;
	text-align: center;
`;
