import { StyleSheet, Text } from "react-native";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectPhoneNumberVerified,
	selectOtp1,
	selectOtp2,
	selectOtp3,
	selectOtp4,
	setPhoneNumberFormActive,
	setVerifyPhoneNumberFormActive,
	setScanDeviceFormActive,
	setPhoneNumberVerified,
	setOtp1,
	setOtp2,
	setOtp3,
	setOtp4,
} from "../../slices/signup-slice.js";
import { selectPhoneNumber } from "../../slices/user-registration-slice.js";

// importing styled components
import * as S from "../../components/styled-components";

// importing helper functions
import { responsiveHeight } from "../../services/dimensions.js";

const VerifyPhoneNumberForm = () => {
	const dispatch = useDispatch();

	const phoneNumber = useSelector(selectPhoneNumber);
	const phoneNumberVerified = useSelector(selectPhoneNumberVerified);
	const otp1 = useSelector(selectOtp1);
	const otp2 = useSelector(selectOtp2);
	const otp3 = useSelector(selectOtp3);
	const otp4 = useSelector(selectOtp4);
	const textInput1 = useRef(null);
	const textInput2 = useRef(null);
	const textInput3 = useRef(null);
	const textInput4 = useRef(null);

	useEffect(() => {
		if (otp1 === "" || otp2 === "" || otp3 === "" || otp4 === "") return;

		const OTP =
			((parseInt(otp1) * 10 + parseInt(otp2)) * 10 + parseInt(otp3)) * 10 +
			parseInt(otp4);
		if (OTP !== 9189) return;

		resetOTP();

		dispatch(setPhoneNumberVerified(true));
		dispatch(setVerifyPhoneNumberFormActive(false));
		dispatch(setScanDeviceFormActive(true));
	}, [otp1, otp2, otp3, otp4]);

	const returnToPreviousForm = (e) => {
		e.preventDefault();

		resetOTP();

		dispatch(setVerifyPhoneNumberFormActive(false));
		dispatch(setPhoneNumberFormActive(true));
	};

	const resetOTP = () => {
		dispatch(setOtp1(""));
		dispatch(setOtp2(""));
		dispatch(setOtp3(""));
		dispatch(setOtp4(""));
	};

	return (
		<S.Container>
			<S.ReturnButtonContainer onPress={returnToPreviousForm}>
				<Icon name="chevron-left" size={35} color="white" />
			</S.ReturnButtonContainer>

			<S.FormContainer style={styles.boxShadow}>
				<S.GreetingsTitleContainer>
					<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
						Verify your phone number
					</S.GreetingsTitle>
				</S.GreetingsTitleContainer>
				<S.GreetingsSubtitle>
					Enter the 4-digit verification code we sent to{" "}
					<Text
						style={{ color: "#321996", fontSize: 20, fontWeight: 700 }}>
						{phoneNumber}
					</Text>
				</S.GreetingsSubtitle>

				<TextInputContainer>
					<StyledTextInput
						value={otp1}
						ref={textInput1}
						maxLength={1}
						keyboardType="numeric"
						returnKeyType="done"
						onChangeText={(num) => {
							dispatch(setOtp1(num));
							if (num === "") {
								dispatch(setOtp2(""));
								dispatch(setOtp3(""));
								dispatch(setOtp4(""));
								dispatch(setPhoneNumberVerified(false));
								return;
							}
							textInput2.current.focus();
						}}
					/>
					<StyledTextInput
						value={otp2}
						ref={textInput2}
						maxLength={1}
						keyboardType="numeric"
						returnKeyType="done"
						onChangeText={(num) => {
							dispatch(setOtp2(num));
							if (num === "") {
								dispatch(setOtp3(""));
								dispatch(setOtp4(""));
								dispatch(setPhoneNumberVerified(false));
								return;
							}
							textInput3.current.focus();
						}}
					/>
					<StyledTextInput
						value={otp3}
						ref={textInput3}
						maxLength={1}
						keyboardType="numeric"
						returnKeyType="done"
						onChangeText={(num) => {
							dispatch(setOtp3(num));
							if (num === "") {
								dispatch(setOtp4(""));
								dispatch(setPhoneNumberVerified(false));
								return;
							}
							textInput4.current.focus();
						}}
					/>
					<StyledTextInput
						value={otp4}
						ref={textInput4}
						maxLength={1}
						keyboardType="numeric"
						returnKeyType="done"
						onChangeText={(num) => {
							dispatch(setOtp4(num));
							if (num === "") dispatch(setPhoneNumberVerified(false));
						}}
					/>
				</TextInputContainer>
			</S.FormContainer>

			<S.ContinueButton
				disabled={!phoneNumberVerified}
				style={[
					styles.continueButton,
					{ opacity: phoneNumberVerified ? 1 : 0.5 },
				]}
				onPress={() => {}}>
				<S.ContinueButtonText>Continue</S.ContinueButtonText>
			</S.ContinueButton>
		</S.Container>
	);
};

export default VerifyPhoneNumberForm;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	continueButton: {
		position: "absolute",
		bottom: "12%",
	},
});

const TextInputContainer = styled.View`
	width: 95%;
	height: 55px;
	margin-top: ${responsiveHeight(5)}px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const StyledTextInput = styled.TextInput`
	width: 20%;
	height: 100%;
	text-align: center;
	font-size: 27px;
	font-weight: bold;
	background-color: #f7f7f7;
	border-radius: 10px;
`;
