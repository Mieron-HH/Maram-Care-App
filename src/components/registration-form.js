import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectFullName,
	selectDOB,
	selectPhoneNumber,
	selectEmail,
	selectPassword,
	selectGender,
	selectCity,
	selectAddress,
	setFullName,
	setDOB,
	setEmail,
	setPassword,
	setGender,
	setCity,
	setAddress,
	setUserInfoValid,
	selectFullNameErrorMessage,
	selectDOBErrorMessage,
	selectPhoneNumberErrorMessage,
	selectEmailErrorMessage,
	selectPasswordErrorMessage,
	selectGenderErrorMessage,
	selectCityErrorMessage,
	selectAddressErrorMessage,
	selectKeyboardDisplayed,
	setFullNameErrorMessage,
	setDOBErrorMessage,
	setPhoneNumberErrorMessage,
	setEmailErrorMessage,
	setPasswordErrorMessage,
	setGenderErrorMessage,
	setCityErrorMessage,
	setAddressErrorMessage,
	setKeyboardDisplayed,
} from "../slices/user-registration-slice";

// importing styled components
import * as S from "../components/styled-components";

const RegistrationForm = ({ formActive, formInactive }) => {
	const dispatch = useDispatch();
	const validatation_url =
		"http://192.168.100.167:3000/api/user/validateInput";

	const fullName = useSelector(selectFullName);
	const DOB = useSelector(selectDOB);
	const phoneNumber = useSelector(selectPhoneNumber);
	const email = useSelector(selectEmail);
	const password = useSelector(selectPassword);
	const gender = useSelector(selectGender);
	const city = useSelector(selectCity);
	const address = useSelector(selectAddress);
	const fullNameErrorMessage = useSelector(selectFullNameErrorMessage);
	const DOBErrorMessage = useSelector(selectDOBErrorMessage);
	const phoneNumberErrorMessage = useSelector(selectPhoneNumberErrorMessage);
	const emailErrorMessage = useSelector(selectEmailErrorMessage);
	const passwordErrorMessage = useSelector(selectPasswordErrorMessage);
	const genderErrorMessage = useSelector(selectGenderErrorMessage);
	const cityErrorMessage = useSelector(selectCityErrorMessage);
	const addressErrorMessage = useSelector(selectAddressErrorMessage);
	const keyboardDisplayed = useSelector(selectKeyboardDisplayed);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	useEffect(() => {
		dispatch(setKeyboardDisplayed(true));
	}, []);

	useEffect(() => {
		if (
			fullName !== "" &&
			DOB !== "" &&
			phoneNumber !== "" &&
			email !== "" &&
			address !== ""
		) {
			if (
				fullNameErrorMessage === "" &&
				DOBErrorMessage === "" &&
				phoneNumberErrorMessage === "" &&
				emailErrorMessage === "" &&
				genderErrorMessage === "" &&
				cityErrorMessage === "" &&
				addressErrorMessage === ""
			) {
				dispatch(setUserInfoValid(true));
				dispatch(setKeyboardDisplayed(false));
			}
		} else {
			if (keyboardDisplayed === false) dispatch(setKeyboardDisplayed(true));
		}
	}, [
		fullName,
		DOB,
		phoneNumber,
		email,
		gender,
		city,
		address,
		fullNameErrorMessage,
		DOBErrorMessage,
		phoneNumberErrorMessage,
		emailErrorMessage,
		genderErrorMessage,
		cityErrorMessage,
		addressErrorMessage,
	]);

	const validateInput = async (state_name, data) => {
		let result = "";
		if (data === null || data === undefined) data = "";

		const options = {
			method: "post",
			url: validatation_url,
			headers: {
				"Content-Type": "application/json",
			},
			data: { [`${state_name}`]: state_name === "DOB" ? data : data.trim() },
		};
		await axios.request(options).catch((err) => {
			console.log(err.response.data.errors[0]);
			result = err.response.data.errors[0].message;
			dispatch(setUserInfoValid(false));
		});

		switch (state_name) {
			case "fullName":
				dispatch(setFullNameErrorMessage(result));
				break;
			case "DOB":
				dispatch(setDOBErrorMessage(result));
				break;
			case "phoneNumber":
				dispatch(setPhoneNumberErrorMessage(result));
				break;
			case "email":
				dispatch(setEmailErrorMessage(result));
				break;
			case "password":
				dispatch(setPasswordErrorMessage(result));
				break;
			case "gender":
				dispatch(setGenderErrorMessage(result));
				break;
			case "city":
				dispatch(setCityErrorMessage(result));
				break;
			case "address":
				dispatch(setAddressErrorMessage(result));
				break;
			default:
				break;
		}
	};

	const pad = (n) => {
		return n < 10 ? "0" + n : n;
	};

	return (
		<RegistrationFormContainer>
			<Text
				style={{
					width: "95%",
					marginTop: "5%",
					textAlign: "left",
					fontSize: 18,
					fontWeight: 700,
				}}>
				Personal Information
			</Text>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: fullNameErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						fullNameErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{fullNameErrorMessage}
				</InputErrorMessage>
				<S.StyledTextInput
					value={fullName}
					onChangeText={(input) => dispatch(setFullName(input))}
					onBlur={() => {
						validateInput("fullName", fullName);
						formInactive();
					}}
					onFocus={() => formActive()}
					placeholder="Full name"
					placeholderTextColor="gray"
				/>
				{fullName !== "" && fullNameErrorMessage === "" && (
					<S.IconContainer style={styles.iconContainer}>
						<Icon name="check" color="#4fb533" size={15} />
					</S.IconContainer>
				)}
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: DOBErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						DOBErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{DOBErrorMessage}
				</InputErrorMessage>
				<S.StyledTextInput
					editable={false}
					value={DOB}
					placeholder="Date of Brith"
					placeholderTextColor="gray"
				/>
				<DateTimePickerModal
					isVisible={isDatePickerVisible}
					mode="date"
					isDarkModeEnabled={false}
					date={DOB === "" ? new Date("1998-06-01") : new Date(DOB)}
					onHide={() => validateInput("DOB", DOB)}
					onConfirm={(date) => {
						dispatch(
							setDOB(
								`${date.getFullYear()}-${pad(
									date.getMonth() + 1
								)}-${pad(date.getDate())}`
							)
						);
						validateInput("DOB", DOB);
						setDatePickerVisibility(false);
					}}
					onCancel={() => setDatePickerVisibility(false)}
				/>
				<DatePickerInput onPress={() => setDatePickerVisibility(true)} />
				{DOB !== "" && DOBErrorMessage === "" && (
					<S.IconContainer style={styles.iconContainer}>
						<Icon name="check" color="#4fb533" size={15} />
					</S.IconContainer>
				)}
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{
						borderColor:
							phoneNumberErrorMessage === "" ? "#dfd2ff" : "red",
					},
				]}>
				<InputErrorMessage
					style={
						phoneNumberErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{phoneNumberErrorMessage}
				</InputErrorMessage>
				<S.StyledTextInput
					style={{ color: "#444" }}
					value={phoneNumber}
					editable={false}
					keyboardType="numeric"
					returnKeyType="done"
					placeholder="Phone number"
					placeholderTextColor="gray"
				/>
				<S.IconContainer style={styles.iconContainer}>
					<Icon name="check" color="#4fb533" size={15} />
				</S.IconContainer>
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: emailErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						emailErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{emailErrorMessage}
				</InputErrorMessage>
				<S.StyledTextInput
					value={email}
					onChangeText={(input) => dispatch(setEmail(input))}
					onBlur={() => {
						validateInput("email", email);
						formInactive();
					}}
					onFocus={() => formActive()}
					placeholder="Email"
					placeholderTextColor="gray"
				/>
				{email !== "" && emailErrorMessage === "" && (
					<S.IconContainer style={styles.iconContainer}>
						<Icon name="check" color="#4fb533" size={15} />
					</S.IconContainer>
				)}
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: passwordErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						passwordErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{passwordErrorMessage}
				</InputErrorMessage>
				<S.StyledTextInput
					value={password}
					onChangeText={(input) => dispatch(setPassword(input))}
					secureTextEntry={true}
					onBlur={() => {
						validateInput("password", password);
						formInactive();
					}}
					onFocus={() => formActive()}
					placeholder="Password"
					placeholderTextColor="gray"
				/>
				{password !== "" && passwordErrorMessage === "" && (
					<S.IconContainer style={styles.iconContainer}>
						<Icon name="check" color="#4fb533" size={15} />
					</S.IconContainer>
				)}
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: genderErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						genderErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{genderErrorMessage}
				</InputErrorMessage>
				<RNPickerSelect
					style={styles.styledPicker}
					onValueChange={(value) => dispatch(setGender(value))}
					onDonePress={() => validateInput("gender", gender)}
					items={[
						{ label: "Male", value: "male" },
						{ label: "Female", value: "female" },
					]}
					placeholder={{ label: "Gender", value: null }}
					value={gender}
					Icon={() => {
						return <View style={styles.pickerIconStyle} />;
					}}
					iconRight={true}
				/>
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: cityErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						cityErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{cityErrorMessage}
				</InputErrorMessage>
				<RNPickerSelect
					style={styles.styledPicker}
					onValueChange={(value) => dispatch(setCity(value))}
					onDonePress={() => validateInput("city", city)}
					items={[
						{ label: "Abu Dhabi", value: "Abu Dhabi" },
						{ label: "Ajman", value: "Ajman" },
						{ label: "Al Ain", value: "Al Ain" },
						{ label: "Dubai", value: "Dubai" },
						{ label: "Ras Al Khaimah", value: "Ras Al Khaimah" },
						{ label: "Sharjah", value: "Sharjah" },
					]}
					placeholder={{ label: "City", value: null }}
					value={city}
					Icon={() => {
						return <View style={styles.pickerIconStyle} />;
					}}
					iconRight={true}
				/>
			</S.TextInputContainer>
			<S.TextInputContainer
				style={[
					styles.textInputContainer,
					{ borderColor: addressErrorMessage === "" ? "#dfd2ff" : "red" },
				]}>
				<InputErrorMessage
					style={
						addressErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{addressErrorMessage}
				</InputErrorMessage>
				<S.StyledTextInput
					value={address}
					onChangeText={(input) => dispatch(setAddress(input))}
					onBlur={() => {
						validateInput("address", address);
						formInactive();
					}}
					onFocus={() => formActive()}
					placeholder="Address"
					placeholderTextColor="gray"
				/>
				{address !== "" && addressErrorMessage === "" && (
					<S.IconContainer style={styles.iconContainer}>
						<Icon name="check" color="#4fb533" size={15} />
					</S.IconContainer>
				)}
			</S.TextInputContainer>
		</RegistrationFormContainer>
	);
};

export default RegistrationForm;

const styles = StyleSheet.create({
	textInputContainer: {
		height: 37,
		marginTop: 15,
		backgroundColor: "white",
		borderColor: "#dfd2ff",
		borderWidth: 1,
	},
	hiddenInput: {
		opacity: 0,
	},
	visibleInput: {
		opacity: 1,
	},
	styledPicker: {
		inputIOS: {
			width: 350,
			height: "100%",
			fontSize: 18,
			fontWeight: "500",
			paddingHorizontal: 15,
			borderRadius: 4,
			color: "black",
		},
		inputAndroid: {
			width: 350,
			height: "100%",
			fontSize: 18,
			fontWeight: "500",
			paddingHorizontal: 10,
			borderRadius: 8,
			color: "black",
			backgroundColor: "white",
		},
		placeholder: {
			color: "gray",
		},
		iconContainer: {
			top: 15,
			right: 18,
		},
	},
	pickerIconStyle: {
		backgroundColor: "transparent",
		borderTopWidth: 6,
		borderTopColor: "black",
		borderRightWidth: 6,
		borderRightColor: "transparent",
		borderLeftWidth: 6,
		borderLeftColor: "transparent",
		width: 0,
		height: 0,
	},
	iconContainer: {
		width: 22,
		height: 22,
		position: "absolute",
		right: 5,
		backgroundColor: "white",
		borderColor: "#4fb533",
		borderWidth: 1.5,
		borderRadius: "100%",
	},
});

const RegistrationFormContainer = styled.View`
	width: 100%;
	height: 84%;
	padding-left: 10px;
	padding-right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const InputErrorMessage = styled.Text`
	padding: 3px;
	font-size: 13px;
	color: red;
	background-color: white;
	border-radius: 5px;
	position: absolute;
	bottom: -10px;
	right: 7px;
`;

const DatePickerInput = styled.TouchableOpacity`
	width: 100%;
	height: 100%;
	background: transparent;
	border-radius: 10%;
	position: absolute;
	z-index: 1;
`;
