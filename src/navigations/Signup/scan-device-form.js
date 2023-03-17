import { StyleSheet } from "react-native";
import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	setPhoneNumberFormActive,
	setScanDeviceFormActive,
	setRegistrationCodeFormActive,
} from "../../slices/signup-slice.js";

// importing styled components
import * as S from "../../components/styled-components";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
	responsiveWidth,
} from "../../services/dimensions.js";

const ScanDeviceForm = () => {
	const dispatch = useDispatch();

	const onOtherRegistrationEvent = (e) => {
		e.preventDefault();

		dispatch(setScanDeviceFormActive(false));
		dispatch(setRegistrationCodeFormActive(true));
	};

	const returnToPreviousForm = (e) => {
		e.preventDefault();

		dispatch(setScanDeviceFormActive(false));
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
						Identify your MamamCare device
					</S.GreetingsTitle>
				</S.GreetingsTitleContainer>
				<S.GreetingsSubtitle>
					Scan the sticker on your device or package using your Mamacare
					phone app
				</S.GreetingsSubtitle>
			</S.FormContainer>

			<S.DeviceImageContainer>
				<S.DeviceImage
					style={{ resizeMode: "contain", width: "80%", height: "80%" }}
					source={require("../../../assets/device_2.png")}
				/>
			</S.DeviceImageContainer>

			<S.ContinueButton style={styles.continueButton}>
				<S.ContinueButtonText
					style={{ color: "white", fontSize: 22, fontWeight: "bold" }}>
					Scan Now
				</S.ContinueButtonText>
			</S.ContinueButton>
			<S.AlternativeButton onPress={onOtherRegistrationEvent}>
				<S.AlternativeButtonText>
					Other registration
				</S.AlternativeButtonText>
			</S.AlternativeButton>
		</S.Container>
	);
};

export default ScanDeviceForm;

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
