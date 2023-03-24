import { StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

// importing components
import PhoneNumberForm from "../navigations/Signup/phone-number-form";
import VerifyPhoneNumberForm from "../navigations/Signup/verify-phone-number-form";
import ScanDeviceForm from "../navigations/Signup/scan-device-form";
import RegistrationCodeForm from "../navigations/Signup/registration-code-form";
import CountryForm from "../navigations/Signup/country-form";
import StateForm from "../navigations/Signup/country-state-form";
import InsuranceProviderForm from "../navigations/Signup/insurance-provider-form";
import UserRegistrationForm from "../navigations/Signup/user-registration-form";

// importing states
import {
	selectPhoneNumberFormActive,
	selectVerifyPhoneNumberFormActive,
	selectScanDeviceFormActive,
	selectRegistrationCodeFormActive,
	selectCountryFormActive,
	selectStateFormActive,
	selectInsuranceProviderForm,
	selectUserRegistrationFormActive,
} from "../slices/signup-slice.js";

// importing styled components
import * as S from "../components/styled-components";

const SignupScreen = () => {
	const phoneNumberFormActive = useSelector(selectPhoneNumberFormActive);
	const verifyPhoneNumberFormActive = useSelector(
		selectVerifyPhoneNumberFormActive
	);
	const scanDeviceFormActive = useSelector(selectScanDeviceFormActive);
	const registrationCodeFormActive = useSelector(
		selectRegistrationCodeFormActive
	);
	const countryFormActive = useSelector(selectCountryFormActive);
	const stateFormActive = useSelector(selectStateFormActive);
	const insuranceProviderForm = useSelector(selectInsuranceProviderForm);
	const userRegistrationForm = useSelector(selectUserRegistrationFormActive);

	return (
		<S.OuterContainer>
			<LinearGradient
				style={styles.LinearGradientStyle}
				colors={["#9669fa", "#8250fa", "#783cfa", "#6473e6", "#5f7ce6"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
			/>
			{phoneNumberFormActive && <PhoneNumberForm />}
			{verifyPhoneNumberFormActive && <VerifyPhoneNumberForm />}
			{scanDeviceFormActive && <ScanDeviceForm />}
			{registrationCodeFormActive && <RegistrationCodeForm />}
			{countryFormActive && <CountryForm />}
			{stateFormActive && <StateForm />}
			{insuranceProviderForm && <InsuranceProviderForm />}
			{userRegistrationForm && <UserRegistrationForm />}
		</S.OuterContainer>
	);
};

export default SignupScreen;

const styles = StyleSheet.create({
	LinearGradientStyle: {
		width: "100%",
		height: "26%",
		borderBottomLeftRadius: "100%",
		borderBottomRightRadius: "100%",
		position: "absolute",
		top: 0,
	},
});
