import { StyleSheet } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectRegistrationCode,
	selectRegistrationCodeErrorMessage,
	selectRegistrationCodeVerified,
	setRegistrationCode,
	setRegistrationCodeErrorMessage,
	setPhoneNumberFormActive,
	setRegistrationCodeFormActive,
	setCountryFormActive,
	setRegistrationCodeVerified,
} from "../../slices/signup-slice";

// importing styled components
import * as S from "../../components/styled-components";

const RegistrationCodeForm = () => {
	const dispatch = useDispatch();

	const registrationCode = useSelector(selectRegistrationCode);
	const registraionCodeErrorMessage = useSelector(
		selectRegistrationCodeErrorMessage
	);
	const registrationCodeVerified = useSelector(selectRegistrationCodeVerified);

	const handleOnBlurEvent = async (e) => {
		e.preventDefault();

		// Validate input here
		if (registrationCode.length < 4) {
			dispatch(
				setRegistrationCodeErrorMessage(
					"Code must be at least 4 characters long"
				)
			);
			dispatch(setRegistrationCodeVerified(false));
			return;
		}

		dispatch(setRegistrationCodeErrorMessage(""));
		dispatch(setRegistrationCodeVerified(true));
	};

	const handleSubmitEvent = (e) => {
		e.preventDefault();

		if (registraionCodeErrorMessage !== "") return;

		dispatch(setRegistrationCodeFormActive(false));
		dispatch(setCountryFormActive(true));
	};
	const returnToPreviousForm = (e) => {
		e.preventDefault();

		dispatch(setRegistrationCodeFormActive(false));
		dispatch(setPhoneNumberFormActive(true));
	};

	return (
		<S.Container>
			<S.ReturnButtonContainer onPress={returnToPreviousForm}>
				<Icon name="chevron-left" size={35} color="white" />
			</S.ReturnButtonContainer>

			<S.FormContainer style={styles.boxShadow}>
				<S.GreetingsTitleContainer>
					<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
						Enter registration code
					</S.GreetingsTitle>
				</S.GreetingsTitleContainer>
				<S.GreetingsSubtitle
					style={{
						color: "#2b2b2b",
						fontSize: 18,
						fontWeight: 600,
						textAlign: "center",
					}}>
					Some healthcare providers send a code via email, SMS, or a
					printed insert in the MamamCare box
				</S.GreetingsSubtitle>
				<S.TextInputContainer
					style={{
						borderColor:
							registraionCodeErrorMessage === "" ? "#f7f7f7" : "red",
						borderWidth: registraionCodeErrorMessage === "" ? 0 : 1,
					}}>
					<S.StyledTextInput
						value={registrationCode}
						onBlur={handleOnBlurEvent}
						onChangeText={(code) => dispatch(setRegistrationCode(code))}
						placeholder="Enter registration code"
						placeholderTextColor="gray"
						returnKeyType="done"
					/>
				</S.TextInputContainer>
				<S.ErrorMessageContainer>
					<S.ErrorMessage>{registraionCodeErrorMessage}</S.ErrorMessage>
				</S.ErrorMessageContainer>
			</S.FormContainer>

			<S.ContinueButton
				disabled={!registrationCodeVerified}
				style={[
					styles.continueButton,
					{ opacity: registrationCodeVerified ? 1 : 0.5 },
				]}
				onPress={handleSubmitEvent}>
				<S.ContinueButtonText>Scan Now</S.ContinueButtonText>
			</S.ContinueButton>
			<S.AlternativeButton>
				<S.AlternativeButtonText>
					Don't have the code
				</S.AlternativeButtonText>
			</S.AlternativeButton>
		</S.Container>
	);
};

export default RegistrationCodeForm;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	continueButton: {
		position: "absolute",
		bottom: "15%",
	},
});
