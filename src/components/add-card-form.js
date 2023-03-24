import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectCardHolderName,
	selectCardNumber,
	selectExpiryDate,
	selectCVC,
	setCardHolderName,
	setCardNumer,
	setExpiryDate,
	setCVC,
	selectCardHolderNameErrorMessage,
	selectCardNumberErrorMessage,
	selectExpiryDateErrorMessage,
	selectCVCErrorMessage,
	setCardHolderNameErrorMessage,
	setCardNumerErrorMessage,
	setExpiryDateErrorMessage,
	setCVCErrorMessage,
	selectCDKeyboardDisplayed,
	selectCreditCardValid,
	setCDKeyboardDisplayed,
	setCreditCardValid,
	setCardFormActive,
	resetCardForm,
} from "../slices/credit-card-slice.js";

// importing styled components
import { ContinueButton, ContinueButtonText } from "./styled-components";
import { showMessage } from "react-native-flash-message";

const AddCardForm = () => {
	const dispatch = useDispatch();

	const validatation_url = "http://192.168.100.167:3000/api/card";
	const cardHolderName = useSelector(selectCardHolderName);
	const cardNumber = useSelector(selectCardNumber);
	const expiryDate = useSelector(selectExpiryDate);
	const CVC = useSelector(selectCVC);

	const cardHolderNameErrorMessage = useSelector(
		selectCardHolderNameErrorMessage
	);
	const cardNumberErrorMessage = useSelector(selectCardNumberErrorMessage);
	const expiryDateErrorMessage = useSelector(selectExpiryDateErrorMessage);
	const CVCErrorMessage = useSelector(selectCVCErrorMessage);
	const cdKeyboadDisplayed = useSelector(selectCDKeyboardDisplayed);
	const creditCardValid = useSelector(selectCreditCardValid);

	useEffect(() => {
		if (
			cardHolderName !== "" &&
			cardNumber !== "" &&
			expiryDate !== "" &&
			CVC !== ""
		) {
			if (
				cardHolderNameErrorMessage === "" &&
				cardNumberErrorMessage === "" &&
				expiryDateErrorMessage === "" &&
				CVCErrorMessage === ""
			) {
				dispatch(setCreditCardValid(true));
			}
		} else {
			dispatch(setCreditCardValid(false));
		}
	}, [
		cdKeyboadDisplayed,
		cardHolderNameErrorMessage,
		cardNumberErrorMessage,
		expiryDateErrorMessage,
		CVCErrorMessage,
	]);

	const validateInput = async (state_name, data) => {
		let result = "";
		if (data === null || data === undefined) data = "";

		const options = {
			method: "post",
			url: `${validatation_url}/validateCard`,
			headers: {
				"Content-Type": "application/json",
			},
			data: { [`${state_name}`]: state_name === "DOB" ? data : data.trim() },
		};
		await axios.request(options).catch((err) => {
			console.log(err.response.data.errors[0]);
			result = err.response.data.errors[0].message;
			dispatch(setCreditCardValid(false));
		});

		switch (state_name) {
			case "cardHolderName":
				dispatch(setCardHolderNameErrorMessage(result));
				break;
			case "cardNumber":
				dispatch(setCardNumerErrorMessage(result));
				break;
			case "expiryDate":
				dispatch(setExpiryDateErrorMessage(result));
				break;
			case "CVC":
				dispatch(setCVCErrorMessage(result));
				break;
			default:
				break;
		}
	};

	const saveCard = (e) => {
		axios
			.post(`${validatation_url}/saveCard`, {
				cardHolderName,
				cardNumber,
				expiryDate,
				CVC,
			})
			.then((result) => {
				console.log(result.data);
				showMessage({
					message: "Successfully saved card",
					description: "Credit Card",
					type: "success",
				});
				dispatch(resetCardForm(""));
				dispatch(setCardFormActive(false));
			})
			.catch((error) => {
				console.log(error);
				showMessage({
					message: "Something went wrong. Please try again.",
					description: "Credit Card",
					type: "danger",
				});
			});
	};

	return (
		<AddCardFormContainer style={styles.boxShadow}>
			<SingleInputGroup
				style={{ width: "90%", height: "20%", marginBottom: 20 }}>
				<InputLabel>Card Number</InputLabel>
				<StyledTextInput
					value={cardNumber}
					onChangeText={(input) => dispatch(setCardNumer(input))}
					onBlur={() => {
						validateInput("cardNumber", cardNumber);
						dispatch(setCDKeyboardDisplayed(false));
					}}
					onFocus={() => {
						dispatch(setCDKeyboardDisplayed(true));
					}}
					placeholder="1234 5676 7897 5798"
					keyboardType="numeric"
					returnKeyType="done"
				/>

				<InputErrorMessage
					style={
						cardNumberErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{cardNumberErrorMessage}
				</InputErrorMessage>

				{cardNumber !== "" && cardNumberErrorMessage === "" && (
					<RightIcon>
						<Icon name="check" size={25} color="lightgreen" />
					</RightIcon>
				)}
			</SingleInputGroup>

			<SingleInputGroup
				style={{ width: "90%", height: "20%", marginBottom: 20 }}>
				<InputLabel>Cardholder Name</InputLabel>
				<StyledTextInput
					value={cardHolderName}
					onChangeText={(input) => dispatch(setCardHolderName(input))}
					onBlur={() => {
						validateInput("cardHolderName", cardHolderName);
						dispatch(setCDKeyboardDisplayed(false));
					}}
					onFocus={() => {
						dispatch(setCDKeyboardDisplayed(true));
					}}
					placeholder="Jessica Jung"
				/>
				<InputErrorMessage
					style={
						cardHolderNameErrorMessage === ""
							? styles.hiddenInput
							: styles.visibleInput
					}>
					{cardHolderNameErrorMessage}
				</InputErrorMessage>

				{cardHolderName !== "" && cardHolderNameErrorMessage === "" && (
					<RightIcon>
						<Icon name="check" size={25} color="lightgreen" />
					</RightIcon>
				)}
			</SingleInputGroup>

			<DoubleInputGroup>
				<SingleInputGroup style={{ width: "45%", height: "100%" }}>
					<InputLabel>Expiry</InputLabel>
					<StyledTextInput
						value={expiryDate}
						onChangeText={(input) => dispatch(setExpiryDate(input))}
						onBlur={() => {
							validateInput("expiryDate", expiryDate);
							dispatch(setCDKeyboardDisplayed(false));
						}}
						onFocus={() => {
							dispatch(setCDKeyboardDisplayed(true));
						}}
						placeholder="12/24"
					/>

					<InputErrorMessage
						style={
							expiryDateErrorMessage === ""
								? styles.hiddenInput
								: styles.visibleInput
						}>
						{expiryDateErrorMessage}
					</InputErrorMessage>

					{expiryDate !== "" && expiryDateErrorMessage === "" && (
						<RightIcon>
							<Icon name="check" size={25} color="lightgreen" />
						</RightIcon>
					)}
				</SingleInputGroup>

				<SingleInputGroup style={{ width: "45%", height: "100%" }}>
					<InputLabel>Security Code</InputLabel>
					<StyledTextInput
						value={CVC}
						onChangeText={(input) => dispatch(setCVC(input))}
						onBlur={() => {
							validateInput("CVC", CVC);
							dispatch(setCDKeyboardDisplayed(false));
						}}
						onFocus={() => {
							dispatch(setCDKeyboardDisplayed(true));
						}}
						placeholder="123"
						keyboardType="numeric"
						returnKeyType="done"
					/>

					<InputErrorMessage
						style={
							CVCErrorMessage === ""
								? styles.hiddenInput
								: styles.visibleInput
						}>
						{CVCErrorMessage}
					</InputErrorMessage>

					{CVC !== "" && CVCErrorMessage === "" && (
						<RightIcon>
							<Icon name="check" size={25} color="lightgreen" />
						</RightIcon>
					)}
				</SingleInputGroup>
			</DoubleInputGroup>

			<ContinueButton
				disabled={!creditCardValid}
				style={[styles.saveButton, { opacity: creditCardValid ? 1 : 0.5 }]}
				onPress={saveCard}>
				<ContinueButtonText>Save</ContinueButtonText>
			</ContinueButton>
		</AddCardFormContainer>
	);
};

export default AddCardForm;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		borderColor: "#f0f2f2",
		borderWidth: 0.5,
	},
	saveButton: {
		position: "absolute",
		bottom: 5,
	},
	hiddenInput: {
		opacity: 0,
	},
	visibleInput: {
		opacity: 1,
	},
});

const AddCardFormContainer = styled.View`
	width: 95%;
	height: 60%;
	margin-top: 5px;
	padding: 5px;
	padding-top: 15px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 20%;
	position: relative;
`;

const DoubleInputGroup = styled.View`
	width: 90%;
	height: 20%;
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
