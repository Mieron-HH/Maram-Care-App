import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	setPhoneNumberFormActive,
	setUserRegistrationFormActive,
} from "../../slices/signup-slice";

// importing styled components
import * as S from "../../components/styled-components";

// importing helper functions
import { responsiveHeight } from "../../services/dimensions";

const SecondLoad = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const handleOnContinueEvent = () => {
		dispatch(setUserRegistrationFormActive(true));
		navigator.replace("SignupScreen");
	};

	const returnToPreviousForm = (e) => {
		e.preventDefault();

		dispatch(setPhoneNumberFormActive(true));
		navigator.replace("SignupScreen");
	};

	return (
		<>
			<S.Container style={{ height: "85%" }}>
				<S.ReturnButtonContainer onPress={returnToPreviousForm}>
					<Icon name="chevron-left" size={35} color="#6e2dfa" />
				</S.ReturnButtonContainer>
				<S.GreetingsTitleContainer
					style={{ width: "50%", marginTop: "10%" }}>
					<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
						We found a health insurance match
					</S.GreetingsTitle>
				</S.GreetingsTitleContainer>

				<CheckImageContainer>
					<CheckImage
						style={{ resizeMode: "contain" }}
						source={require("../../../assets/check-image.png")}
					/>
				</CheckImageContainer>

				<StyledText>Your Maram Care provider is Daman Health</StyledText>
			</S.Container>
			<S.ContinueButtonContainer>
				<S.ContinueButton
					style={{ marginTop: 0 }}
					onPress={handleOnContinueEvent}>
					<S.ContinueButtonText>Continue Sign Up</S.ContinueButtonText>
				</S.ContinueButton>
			</S.ContinueButtonContainer>
		</>
	);
};

export default SecondLoad;

const CheckImageContainer = styled.View`
	width: ${responsiveHeight(12)}px;
	height: ${responsiveHeight(12)}px;
	margin-top: ${responsiveHeight(3)}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CheckImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const StyledText = styled.Text`
	width: 80%;
	margin-top: ${responsiveHeight(5)}px;
	font-size: 31px;
	font-weight: 500;
	text-align: center;
	color: #3a2387;
`;
