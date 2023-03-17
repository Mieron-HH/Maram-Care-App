import { StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styled from "styled-components";

// importing components
import RegistrationForm from "../../components/registration-form";

// importing states
import {
	selectSignupErrorMessage,
	setSignupErrorMessage,
} from "../../slices/signup-slice";
import {
	selectFullName,
	selectDOB,
	selectPhoneNumber,
	selectEmail,
	selectPassword,
	selectGender,
	selectCity,
	selectAddress,
	selectUserInfoValid,
	selectKeyboardDisplayed,
} from "../../slices/user-registration-slice";

// importing styled components
import * as S from "../../components/styled-components";

const UserRegistrationForm = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const AnimatedGreetingsMessageContainer =
		Animated.createAnimatedComponent(GreetingsContainer);
	const formAnim = useRef(new Animated.Value(70)).current;

	const userInfoValid = useSelector(selectUserInfoValid);
	const fullName = useSelector(selectFullName);
	const DOB = useSelector(selectDOB);
	const phoneNumber = useSelector(selectPhoneNumber);
	const email = useSelector(selectEmail);
	const password = useSelector(selectPassword);
	const gender = useSelector(selectGender);
	const city = useSelector(selectCity);
	const address = useSelector(selectAddress);
	const keyboardDisplayed = useSelector(selectKeyboardDisplayed);
	const signupErrorMessage = useSelector(selectSignupErrorMessage);

	useEffect(() => {
		// Display Modal here
	}, [signupErrorMessage]);

	const formActive = () => {
		Animated.timing(formAnim, {
			toValue: 0,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const formInactive = () => {
		Animated.timing(formAnim, {
			toValue: 70,
			duration: 300,
			useNativeDriver: false,
		}).start();
	};

	const handleOnSignupEvent = async (e) => {
		e.preventDefault();

		await axios
			.post("http://192.168.100.167:3000/api/user/signup", {
				phoneNumber,
				DOB,
				email,
				password,
				fullName,
				gender,
				city,
				address,
			})
			.then((result) => {
				navigator.replace("HomeScreen");
			})
			.catch((error) => {
				dispatch(setSignupErrorMessage(error.response.data.errors[0].msg));
				console.log({ signupErrorMessage });
			});
	};

	return (
		<>
			<S.Container style={{ height: "85%" }}>
				<S.FormContainer
					style={[
						S.styles.boxShadow,
						styles.formContainer,
						{
							marginTop: keyboardDisplayed ? 0 : 70,
						},
					]}>
					<AnimatedGreetingsMessageContainer style={{ height: formAnim }}>
						<S.GreetingsTitleContainer style={{ marginBottom: 0 }}>
							<S.GreetingsTitle>Welcome back to</S.GreetingsTitle>
							<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
								{" "}
								Maram{" "}
							</S.GreetingsTitle>
							<S.GreetingsTitle style={{ color: "#321996" }}>
								Care!
							</S.GreetingsTitle>
						</S.GreetingsTitleContainer>
						<S.GreetingsSubtitle>
							Your provider is Daman Health
						</S.GreetingsSubtitle>
					</AnimatedGreetingsMessageContainer>

					<RegistrationForm
						formActive={formActive}
						formInactive={formInactive}
					/>
				</S.FormContainer>
			</S.Container>
			<S.ContinueButtonContainer>
				<S.ContinueButton
					disabled={!userInfoValid}
					style={{ marginTop: 0, opacity: userInfoValid ? 1 : 0.5 }}
					onPress={handleOnSignupEvent}>
					<S.ContinueButtonText>Sign Up</S.ContinueButtonText>
				</S.ContinueButton>
			</S.ContinueButtonContainer>
		</>
	);
};

export default UserRegistrationForm;

const styles = StyleSheet.create({
	formContainer: {
		height: "80%",
	},
	textInputContainer: {
		height: 40,
		marginTop: 19,
		backgroundColor: "white",
		borderColor: "purple",
		borderWidth: 0.5,
	},
});

const GreetingsContainer = styled.View`
	width: 100%;
	height: 16%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;
