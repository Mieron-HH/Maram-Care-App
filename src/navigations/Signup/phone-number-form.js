import { StyleSheet } from "react-native";
import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectPhoneNumberValid,
	setPhoneNumberFormActive,
	setVerifyPhoneNumberFormActive,
	setPhoneNumberValid,
} from "../../slices/signup-slice.js";
import {
	selectPhoneNumber,
	selectPhoneNumberErrorMessage,
	setPhoneNumber,
	setPhoneNumberErrorMessage,
} from "../../slices/user-registration-slice";

// importing styled components
import * as S from "../../components/styled-components";

const PhoneNumberForm = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const phoneNumber = useSelector(selectPhoneNumber);
	const phoneNumberErrorMessage = useSelector(selectPhoneNumberErrorMessage);
	const phoneNumberValid = useSelector(selectPhoneNumberValid);

	const handleOnBlurEvent = async (e) => {
		e.preventDefault();

		// Validate input here
		await axios
			.post("http://192.168.12.37:3000/api/user/validateInput", {
				phoneNumber,
			})
			.then((result) => {
				dispatch(setPhoneNumberErrorMessage(""));
				dispatch(setPhoneNumberValid(true));
			})
			.catch((error) => {
				dispatch(
					setPhoneNumberErrorMessage(error.response.data.errors[0].message)
				);
				dispatch(setPhoneNumberValid(false));
			});
	};

	const handleSubmitEvent = (e) => {
		e.preventDefault();

		if (phoneNumberValid) {
			dispatch(setPhoneNumberFormActive(false));
			dispatch(setVerifyPhoneNumberFormActive(true));
		}
	};

	return (
		<S.Container>
			<S.ReturnButtonContainer onPress={() => navigator.replace("LoginScreen")}>
				<Icon name="chevron-left" size={35} color="white" />
			</S.ReturnButtonContainer>

			<S.FormContainer style={styles.boxShadow}>
				<S.GreetingsTitleContainer>
					<S.GreetingsTitle style={{ color: "#23c7cd" }}>
						Welcome to
					</S.GreetingsTitle>
					<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
						{" "}
						Maram{" "}
					</S.GreetingsTitle>
					<S.GreetingsTitle style={{ color: "#321996" }}>Care</S.GreetingsTitle>
				</S.GreetingsTitleContainer>
				<S.GreetingsSubtitle>
					Providing remote medical care from the comfort of your home
				</S.GreetingsSubtitle>

				<S.TextInputContainer
					style={[
						styles.textInputContainer,
						{
							borderColor: phoneNumberErrorMessage === "" ? "#f7f7f7" : "red",
							borderWidth: phoneNumberErrorMessage === "" ? 0 : 1,
						},
					]}
				>
					<S.StyledTextInput
						value={phoneNumber}
						onChangeText={(number) => dispatch(setPhoneNumber(number))}
						onBlur={handleOnBlurEvent}
						placeholder="Phone number"
						placeholderTextColor="#8c5cfa"
						keyboardType="numeric"
						returnKeyType="done"
					/>
				</S.TextInputContainer>
				<S.ErrorMessageContainer>
					<S.ErrorMessage>{phoneNumberErrorMessage}</S.ErrorMessage>
				</S.ErrorMessageContainer>
			</S.FormContainer>

			<S.DeviceImageContainer>
				<S.DeviceImage
					style={{ resizeMode: "contain" }}
					source={require("../../../assets/device_1.png")}
				/>
			</S.DeviceImageContainer>

			<S.ContinueButton
				disabled={!phoneNumberValid}
				onPress={handleSubmitEvent}
				style={[
					styles.continueButton,
					{
						opacity: phoneNumberValid ? 1 : 0.5,
					},
				]}
			>
				<S.ContinueButtonText>Continue</S.ContinueButtonText>
			</S.ContinueButton>
		</S.Container>
	);
};

export default PhoneNumberForm;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	textInputContainer: {
		marginTop: 50,
	},
	continueButton: {
		position: "absolute",
		bottom: "12%",
	},
});
