import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

import { ContinueButton, ContinueButtonText } from "./styled-components";

const AddCardForm = () => {
	return (
		<AddCardFormContainer style={styles.boxShadow}>
			<SingleInputGroup
				style={{ width: "90%", height: "20%", marginBottom: 20 }}>
				<InputLabel>Card Number</InputLabel>
				<StyledTextInput placeholder="1234 5676 7897 5798" />
			</SingleInputGroup>
			<SingleInputGroup
				style={{ width: "90%", height: "20%", marginBottom: 20 }}>
				<InputLabel>Cardholder Name</InputLabel>
				<StyledTextInput placeholder="Jessica Jung" />
			</SingleInputGroup>

			<DoubleInputGroup>
				<SingleInputGroup style={{ width: "45%", height: "100%" }}>
					<InputLabel>Expiry</InputLabel>
					<StyledTextInput placeholder="12/24" />
				</SingleInputGroup>
				<SingleInputGroup style={{ width: "45%", height: "100%" }}>
					<InputLabel>Security Code</InputLabel>
					<StyledTextInput placeholder="123" />
				</SingleInputGroup>
			</DoubleInputGroup>

			<ContinueButton style={styles.saveButton}>
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
});

const AddCardFormContainer = styled.View`
	width: 95%;
	height: 55%;
	margin-top: 30px;
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
