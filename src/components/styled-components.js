import { StyleSheet } from "react-native";
import styled from "styled-components";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
	responsiveWidth,
} from "../services/dimensions.js";

export const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 0, height: 6 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		borderColor: "#f2f5f5",
		borderWidth: 0.5,
	},
	reverseBoxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: -2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	},
	formContainer: {
		height: "89%",
		borderRadius: 0,
		borderTopLeftRadius: "20%",
		borderTopRightRadius: "20%",
	},
});

export const OuterContainer = styled.View`
	width: 100%;
	height: 100%;
	padding-top: ${responsiveHeight(5)}px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

export const Container = styled.View`
	width: ${percentageCalculation(355, 108)}px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

export const ReturnButtonContainer = styled.TouchableOpacity`
	width: ${responsiveWidth(95)}px;
	height: ${responsiveHeight(4)}px;
	position: absolute;
	top: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const FormContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(30)}px;
	border-radius: 20%;
	margin-top: ${responsiveHeight(8)}px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

export const GreetingsTitleContainer = styled.View`
	width: 90%;
	margin-top: ${responsiveHeight(3)}px;
	margin-bottom: ${responsiveHeight(3)}px;
	word-wrap: break-word;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const GreetingsTitle = styled.Text`
	font-size: 23px;
	font-weight: bold;
	text-align: center;
`;

export const GreetingsSubtitle = styled.Text`
	width: 80%;
	color: #2b2b2b;
	font-size: 18px;
	font-weight: 600;
	text-align: center;
`;

export const TextInputContainer = styled.View`
	width: 95%;
	height: 50px;
	margin-top: ${responsiveHeight(4)}px;
	background-color: #f7f7f7;
	border-radius: 10%;
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
`;

export const StyledTextInput = styled.TextInput`
	width: 100%;
	height: 100%;
	padding-left: 15px;
	font-size: 18px;
	font-weight: 500;
`;

export const IconContainer = styled.TouchableOpacity`
	width: 13%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const SelectedDataText = styled.TextInput`
	width: 74%;
	height: 100%;
	font-size: 18px;
	font-weight: 700;
	color: #5c5d5e;
`;

export const DataListContainer = styled.ScrollView`
	width: 100%;
	margin-top: 5px;
`;

export const DataEntry = styled.TouchableOpacity`
	width: 100%;
	height: ${responsiveHeight(6.5)}px;
	padding-left: 18px;
	padding-right: 8px;
	padding-top: 15px;
	border-bottom-width: 1px;
	border-color: lightgray;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const DataEntryText = styled.Text`
	color: #5c5d5e;
	font-size: 18px;
	font-weight: 600;
	width: 85%;
`;

export const ErrorMessageContainer = styled.View`
	width: 95%;
	text-align: left;
	padding-left: 2px;
`;

export const ErrorMessage = styled.Text`
	color: red;
	font-size: 16px;
`;

export const DeviceImageContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(25)}px;
	margin-top: ${responsiveHeight(5)}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DeviceImage = styled.Image`
	width: 100%;
	height: 100%;
`;

export const ContinueButtonContainer = styled.View`
	width: 100%;
	height: 15%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContinueButton = styled.TouchableOpacity`
	width: ${percentageCalculation(350, 100)}px;
	height: 50px;
	background-color: #2dcad0;
	border-radius: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContinueButtonText = styled.Text`
	color: white;
	font-size: 22px;
	font-weight: bold;
`;

export const AlternativeButton = styled.TouchableOpacity`
	width: ${percentageCalculation(350, 100)}px;
	height: 50px;
	margin-top: ${responsiveHeight(1)}px;
	border: 1.5px solid #321996;
	border-radius: 10%;
	position: absolute;
	bottom: 8%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AlternativeButtonText = styled.Text`
	color: #321996;
	font-size: 22px;
	font-weight: bold;
`;
