import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styled from "styled-components";
import { showMessage } from "react-native-flash-message";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectHPFullName,
	selectHPRelative,
	selectHPGender,
	selectHPDOB,
	selectHPHeight,
	selectHPWeight,
	selectHPBloodGroup,
	setHPFullName,
	setHPRelative,
	setHPGender,
	setHPDOB,
	setHPHeight,
	setHPWeight,
	setHPBloodGroup,
	selectHPFullNameErrorMessage,
	selectHPRelativeErrorMessage,
	selectHPGenderErrorMessage,
	selectHPDOBErrorMessage,
	selectHPHeightErrorMessage,
	selectHPWeightErrorMessage,
	selectHPBloodGroupErrorMessage,
	selectHPKeyboardDisplayed,
	selectHealthProfileValid,
	setHPFullNameErrorMessage,
	setHPRelativeErrorMessage,
	setHPGenderErrorMessage,
	setHPDOBErrorMessage,
	setHPHeightErrorMessage,
	setHPWeightErrorMessage,
	setHPBloodGroupErrorMessage,
	setHPKeyboardDisplayed,
	setHealthProfileValid,
	resetHealthProfile,
} from "../slices/health-profile-slice.js";

// importing styled components
import * as S from "../components/styled-components";

// importing sub components
import CalendarIcon from "../sub-components/calendar-icon.js";

// importing helper functions
import { responsiveWidth, responsiveHeight } from "../services/dimensions";

const CreateHealthProfileScreen = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();
	const validatation_url =
		"http://192.168.12.37:3000/api/health/validateHealthProfileInput";

	const hpFullName = useSelector(selectHPFullName);
	const hpRelative = useSelector(selectHPRelative);
	const hpGender = useSelector(selectHPGender);
	const hpDOB = useSelector(selectHPDOB);
	const hpHeight = useSelector(selectHPHeight);
	const hpWeight = useSelector(selectHPWeight);
	const hpBloodGroup = useSelector(selectHPBloodGroup);
	const hpFullNameErrorMessage = useSelector(selectHPFullNameErrorMessage);
	const hpRelativeErrorMessage = useSelector(selectHPRelativeErrorMessage);
	const hpGenderErrorMessage = useSelector(selectHPGenderErrorMessage);
	const hpDOBErrorMessage = useSelector(selectHPDOBErrorMessage);
	const hpHeightErrorMessage = useSelector(selectHPHeightErrorMessage);
	const hpWeightErrorMessage = useSelector(selectHPWeightErrorMessage);
	const hpBloodGroupErrorMessage = useSelector(selectHPBloodGroupErrorMessage);
	const hpKeyboardDisplayed = useSelector(selectHPKeyboardDisplayed);
	const healthProfileValid = useSelector(selectHealthProfileValid);
	const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

	useEffect(() => {
		if (
			hpFullName !== "" &&
			hpRelative !== "" &&
			hpGender !== "" &&
			hpDOB !== "" &&
			hpHeight !== "" &&
			hpWeight !== "" &&
			hpBloodGroup !== ""
		) {
			if (
				hpFullNameErrorMessage === "" &&
				hpRelativeErrorMessage === "" &&
				hpGenderErrorMessage === "" &&
				hpDOBErrorMessage === "" &&
				hpHeightErrorMessage === "" &&
				hpWeightErrorMessage === "" &&
				hpBloodGroupErrorMessage === ""
			) {
				dispatch(setHealthProfileValid(true));
				dispatch(setHPKeyboardDisplayed(false));
			}
		} else {
			// if (hpKeyboardDisplayed === false)
			// 	dispatch(setHPKeyboardDisplayed(true));
			dispatch(setHealthProfileValid(false));
		}
	}, [
		hpFullName,
		hpRelative,
		hpGender,
		hpDOB,
		hpHeight,
		hpWeight,
		hpBloodGroup,
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
			dispatch(setHealthProfileValid(false));
		});

		switch (state_name) {
			case "fullName":
				dispatch(setHPFullNameErrorMessage(result));
				break;
			case "relative":
				dispatch(setHPRelativeErrorMessage(result));
				break;
			case "gender":
				dispatch(setHPGenderErrorMessage(result));
				break;
			case "DOB":
				dispatch(setHPDOBErrorMessage(result));
				break;
			case "height":
				dispatch(setHPHeightErrorMessage(result));
				break;
			case "weight":
				dispatch(setHPWeightErrorMessage(result));
				break;
			case "bloodGroup":
				dispatch(setHPBloodGroupErrorMessage(result));
				break;
			default:
				break;
		}
	};

	const createHealthProfile = (e) => {
		e.preventDefault();

		axios
			.post("http://192.168.12.37:3000/api/health/createHealthProfile", {
				fullName: hpFullName,
				relative: hpRelative,
				gender: hpGender,
				DOB: hpDOB,
				height: hpHeight,
				weight: hpWeight,
				bloodGroup: hpBloodGroup,
			})
			.then((result) => {
				console.log(result.data);
				showMessage({
					message: "Successfully created a health profile",
					description: "Health Profile",
					type: "success",
				});
				dispatch(resetHealthProfile(""));
				navigator.goBack();
			})
			.catch((error) => {
				console.log(error);
				showMessage({
					message: "Something went wrong. Please try again.",
					description: "Health Profile",
					type: "danger",
				});
			});
	};

	const pad = (n) => {
		return n < 10 ? "0" + n : n;
	};

	return (
		<S.OuterContainer>
			<HeaderBackground />
			{!hpKeyboardDisplayed && (
				<HeaderTitleContainer>
					<ReturnButtonContainer
						style={styles.boxShadow}
						onPress={() => navigator.goBack()}
					>
						<Icon name="chevron-left" size={35} color="#333" />
					</ReturnButtonContainer>
					<HeaderTitle>Profile</HeaderTitle>
				</HeaderTitleContainer>
			)}

			<S.Container>
				<HealthFormContainer
					style={[
						styles.boxShadow,
						{
							marginTop: hpKeyboardDisplayed ? 60 : 180,
						},
					]}
				>
					<UserImageContainer>
						<UserImage
							style={{ resizeMode: "cover", borderRadius: 100 }}
							source={require("../../assets/user_image.jpg")}
						/>
						<AddUserImageButton style={styles.boxShadow}>
							<Icon name="add-a-photo" size={25} color="#5e42e3" />
						</AddUserImageButton>
					</UserImageContainer>

					<FormContainer>
						<SingleInputGroup
							style={{ width: "100%", height: "14%", marginBottom: 20 }}
						>
							<InputLabel>First Name & Last Name</InputLabel>
							<StyledTextInput
								value={hpFullName}
								onChangeText={(input) => dispatch(setHPFullName(input))}
								onBlur={() => {
									validateInput("fullName", hpFullName);
									dispatch(setHPKeyboardDisplayed(false));
								}}
								onFocus={() => {
									dispatch(setHPKeyboardDisplayed(true));
								}}
								placeholder="Jessica Jung"
							/>
							<InputErrorMessage
								style={
									hpFullNameErrorMessage === ""
										? styles.hiddenInput
										: styles.visibleInput
								}
							>
								{hpFullNameErrorMessage}
							</InputErrorMessage>
							{hpFullName !== "" && hpFullNameErrorMessage === "" && (
								<RightIcon>
									<Icon name="check" size={25} color="lightgreen" />
								</RightIcon>
							)}
						</SingleInputGroup>

						<DoubleInputGroup>
							<SingleInputGroup
								style={{
									width: "45%",
									height: "100%",
								}}
							>
								<InputLabel>Relative</InputLabel>
								<DropdownSelectorContainer>
									<RNPickerSelect
										style={styles.styledPicker}
										onValueChange={(value) => dispatch(setHPRelative(value))}
										onDonePress={() => validateInput("relative", hpRelative)}
										items={[
											{ label: "Me", value: "me" },
											{ label: "Mother", value: "mother" },
											{ label: "Father", value: "father" },
											{ label: "Grandmother", value: "grandmother" },
											{ label: "Grandfather", value: "grandfather" },
											{ label: "Uncle", value: "uncle" },
											{ label: "Aunt", value: "aunt" },
											{ label: "Niece", value: "niece" },
											{ label: "Nephew", value: "nephew" },
											{ label: "Friend", value: "friend" },
										]}
										placeholder={{ label: "Relative", value: null }}
										value={hpRelative}
										Icon={() => {
											return <View style={styles.pickerIconStyle} />;
										}}
										iconRight={true}
									/>
								</DropdownSelectorContainer>
								<InputErrorMessage
									style={
										hpRelativeErrorMessage === ""
											? styles.hiddenInput
											: styles.visibleInput
									}
								>
									{hpRelativeErrorMessage}
								</InputErrorMessage>
							</SingleInputGroup>

							<SingleInputGroup
								style={{
									width: "45%",
									height: "100%",
								}}
							>
								<InputLabel>Gender</InputLabel>
								<DropdownSelectorContainer>
									<RNPickerSelect
										style={styles.styledPicker}
										onValueChange={(value) => dispatch(setHPGender(value))}
										onDonePress={() => validateInput("gender", hpGender)}
										items={[
											{ label: "Male", value: "male" },
											{ label: "Female", value: "female" },
										]}
										placeholder={{ label: "Gender", value: null }}
										value={hpGender}
										Icon={() => {
											return <View style={styles.pickerIconStyle} />;
										}}
										iconRight={true}
									/>
								</DropdownSelectorContainer>
								<InputErrorMessage
									style={
										hpGenderErrorMessage === ""
											? styles.hiddenInput
											: styles.visibleInput
									}
								>
									{hpGenderErrorMessage}
								</InputErrorMessage>
							</SingleInputGroup>
						</DoubleInputGroup>

						<SingleInputGroup
							style={{
								width: "100%",
								height: "14%",
								marginBottom: 20,
							}}
						>
							<InputLabel>Date of Birth</InputLabel>
							<StyledTextInput
								value={hpDOB}
								editable={false}
								placeholder="1998-01-06"
							/>
							<DateTimePickerModal
								isVisible={isDatePickerVisible}
								mode="date"
								isDarkModeEnabled={false}
								date={hpDOB === "" ? new Date("1998-06-01") : new Date(hpDOB)}
								onHide={() => validateInput("DOB", hpDOB)}
								onConfirm={(date) => {
									dispatch(
										setHPDOB(
											`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
												date.getDate()
											)}`
										)
									);
									validateInput("DOB", hpDOB);
									setDatePickerVisibility(false);
								}}
								onCancel={() => setDatePickerVisibility(false)}
							/>
							<InputErrorMessage
								style={
									hpDOBErrorMessage === ""
										? styles.hiddenInput
										: styles.visibleInput
								}
							>
								{hpDOBErrorMessage}
							</InputErrorMessage>
							<DatePickerInput onPress={() => setDatePickerVisibility(true)} />
							<RightIcon>
								<CalendarIcon color="lightgray" size={23} />
							</RightIcon>
						</SingleInputGroup>

						<DoubleInputGroup>
							<SingleInputGroup
								style={{
									width: "45%",
									height: "100%",
								}}
							>
								<InputLabel>Height (cm)</InputLabel>
								<StyledTextInput
									value={hpHeight}
									onChangeText={(input) => dispatch(setHPHeight(input))}
									onBlur={() => {
										validateInput("height", hpHeight);
										dispatch(setHPKeyboardDisplayed(false));
									}}
									onFocus={() => {
										dispatch(setHPKeyboardDisplayed(true));
									}}
									placeholder="170"
									keyboardType="numeric"
									returnKeyType="done"
								/>
								<InputErrorMessage
									style={
										hpHeightErrorMessage === ""
											? styles.hiddenInput
											: styles.visibleInput
									}
								>
									{hpHeightErrorMessage}
								</InputErrorMessage>
								{hpHeight !== "" && hpHeightErrorMessage === "" && (
									<RightIcon>
										<Icon name="check" size={25} color="lightgreen" />
									</RightIcon>
								)}
							</SingleInputGroup>

							<SingleInputGroup
								style={{
									width: "45%",
									height: "100%",
								}}
							>
								<InputLabel>Weight (kg)</InputLabel>
								<StyledTextInput
									value={hpWeight}
									onChangeText={(input) => dispatch(setHPWeight(input))}
									onBlur={() => {
										validateInput("weight", hpWeight);
										dispatch(setHPKeyboardDisplayed(false));
									}}
									onFocus={() => {
										dispatch(setHPKeyboardDisplayed(true));
									}}
									placeholder="70"
									keyboardType="numeric"
									returnKeyType="done"
								/>
								<InputErrorMessage
									style={
										hpWeightErrorMessage === ""
											? styles.hiddenInput
											: styles.visibleInput
									}
								>
									{hpWeightErrorMessage}
								</InputErrorMessage>
								{hpWeight !== "" && hpWeightErrorMessage === "" && (
									<RightIcon>
										<Icon name="check" size={25} color="lightgreen" />
									</RightIcon>
								)}
							</SingleInputGroup>
						</DoubleInputGroup>

						<SingleInputGroup
							style={{
								width: "100%",
								height: "14%",
								marginBottom: 20,
							}}
						>
							<InputLabel>Blood Group</InputLabel>
							<DropdownSelectorContainer>
								<RNPickerSelect
									style={styles.styledPicker}
									onValueChange={(value) => dispatch(setHPBloodGroup(value))}
									onDonePress={() => validateInput("bloodGroup", hpBloodGroup)}
									items={[
										{ label: "A", value: "A" },
										{ label: "B", value: "B" },
										{ label: "AB", value: "AB" },
										{ label: "O", value: "O" },
									]}
									placeholder={{ label: "Blood Group", value: null }}
									value={hpBloodGroup}
									Icon={() => {
										return <View style={styles.pickerIconStyle} />;
									}}
									iconRight={true}
								/>
							</DropdownSelectorContainer>
							<InputErrorMessage
								style={
									hpBloodGroupErrorMessage === ""
										? styles.hiddenInput
										: styles.visibleInput
								}
							>
								{hpBloodGroupErrorMessage}
							</InputErrorMessage>
						</SingleInputGroup>
					</FormContainer>

					<S.ContinueButton
						disabled={!healthProfileValid}
						style={[
							styles.createButton,
							{ opacity: healthProfileValid ? 1 : 0.5 },
						]}
						onPress={createHealthProfile}
					>
						<S.ContinueButtonText>Create Profile</S.ContinueButtonText>
					</S.ContinueButton>
				</HealthFormContainer>
			</S.Container>
		</S.OuterContainer>
	);
};

export default CreateHealthProfileScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
	},
	createButton: {
		position: "absolute",
		bottom: 5,
	},
	hiddenInput: {
		opacity: 0,
	},
	visibleInput: {
		opacity: 1,
	},
	styledPicker: {
		inputIOS: {
			width: "100%",
			height: "100%",
			fontSize: 20,
			fontWeight: "500",
			paddingHorizontal: 15,
			borderRadius: 4,
			color: "#555",
		},
		inputAndroid: {
			width: "100%",
			height: "100%",
			fontSize: 20,
			fontWeight: "500",
			paddingHorizontal: 10,
			borderRadius: 8,
			color: "#555",
			backgroundColor: "white",
		},
		placeholder: {
			color: "gray",
		},
		iconContainer: {
			top: 22,
			right: 18,
		},
	},
	pickerIconStyle: {
		backgroundColor: "transparent",
		borderTopWidth: 6,
		borderTopColor: "#555",
		borderRightWidth: 6,
		borderRightColor: "transparent",
		borderLeftWidth: 6,
		borderLeftColor: "transparent",
		width: 0,
		height: 0,
	},
	formContainer: {
		margin: 0,
		margonTop: 10,
	},
});

const HeaderBackground = styled.View`
	width: ${responsiveWidth(100)}px;
	height: ${responsiveHeight(45)}px;
	border-bottom-right-radius: 50%;
	border-bottom-left-radius: 50%;
	background-color: #5e42e3;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: absolute;
	top: 0;
`;

const HeaderTitleContainer = styled.View`
	width: 95%;
	height: 55px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: ${responsiveHeight(6)}px;
	z-index: 1;
`;

const HeaderTitle = styled.Text`
	font-size: 22px;
	font-weight: 600;
	color: white;
`;

const ReturnButtonContainer = styled.TouchableOpacity`
	width: 45px;
	height: 85%;
	background-color: white;
	border-radius: 12%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	left: 10px;
`;

const HealthFormContainer = styled.View`
	width: 100%;
	height: 70%;
	background-color: white;
	border-radius: 20%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

const UserImageContainer = styled.View`
	width: 120px;
	height: 120px;
	padding: 3px;
	background-color: white;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: -65px;
`;

const UserImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const AddUserImageButton = styled.TouchableOpacity`
	width: 45px;
	height: 45px;
	background-color: white;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 10px;
	right: 0;
`;

const FormContainer = styled.View`
	width: 90%;
	height: 90%;
	margin-top: 15%;
	padding-top: 10px;
`;

const DoubleInputGroup = styled.View`
	width: 100%;
	height: 14%;
	margin-bottom: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const SingleInputGroup = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const InputLabel = styled.Text`
	font-size: 17px;
	font-weight: 600;
	color: #b7b9c9;
`;

const StyledTextInput = styled.TextInput`
	width: 100%;
	height: 70%;
	padding-left: 15px;
	font-size: 20px;
	color: #555;
	border-radius: 20px;
	border: 1.3px solid #b7b9c9;
`;

const DropdownSelectorContainer = styled.View`
	width: 100%;
	height: 70%;
	border-radius: 20px;
	border: 1.3px solid #b7b9c9;
`;

const DatePickerInput = styled.TouchableOpacity`
	width: 100%;
	height: 70%;
	background: transparent;
	border-radius: 20px;
	position: absolute;
	bottom: 0;
	z-index: 1;
`;

const InputErrorMessage = styled.Text`
	padding: 3px;
	font-size: 13px;
	color: red;
	background-color: white;
	border-radius: 5px;
	position: absolute;
	bottom: -8px;
	right: 7px;
`;

const RightIcon = styled.View`
	width: 50px;
	height: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 0;
	bottom: 0;
`;
