import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectCDKeyboardDisplayed,
	selectCardFormActive,
	setCardFormActive,
	resetCardForm,
} from "../slices/credit-card-slice";

// importing components
import CreditCards from "../components/credit-cards";
import AddCardForm from "../components/add-card-form";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import {
	responsiveHeight,
	percentageCalculation,
} from "../services/dimensions";

const PaymentMethodScreen = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const cdKeyboadDisplayed = useSelector(selectCDKeyboardDisplayed);
	const cardFormActive = useSelector(selectCardFormActive);

	return (
		<S.OuterContainer>
			<HeaderContainer style={styles.boxShadow}>
				<ReturnButtonContainer>
					<ReturnButton onPress={() => navigator.goBack()}>
						<Icon name="chevron-left" size={40} color="black" />
					</ReturnButton>
					<Text style={styles.screenTitle}>Payment Method</Text>
				</ReturnButtonContainer>
			</HeaderContainer>

			<BodyContainer>
				{!cdKeyboadDisplayed && <CreditCards />}

				{!cardFormActive && (
					<AddNeCardButton
						onPress={() => dispatch(setCardFormActive(true))}>
						<StyledButtonText style={{ color: "#72d0d4" }}>
							+ Add New Card
						</StyledButtonText>
					</AddNeCardButton>
				)}

				{cardFormActive && !cdKeyboadDisplayed && (
					<HideFormButton
						onPress={() => {
							dispatch(setCardFormActive(false));
							dispatch(resetCardForm(""));
						}}>
						<Icon name="cancel" size={25} color="#f55b6e" />
					</HideFormButton>
				)}

				{cardFormActive && <AddCardForm />}
			</BodyContainer>
		</S.OuterContainer>
	);
};

export default PaymentMethodScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	screenTitle: {
		width: "40%",
		fontSize: 20,
		fontWeight: 500,
		textAlign: "center",
		position: "absolute",
		left: "30%",
	},
});

const HeaderContainer = styled.View`
	width: 100%;
	height: 18%;
	background-color: white;
	border-bottom-left-radius: 20%;
	border-bottom-right-radius: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
`;

const ReturnButtonContainer = styled.View`
	width: 98%;
	height: ${responsiveHeight(5)}px;
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	position: relative;
`;

const ReturnButton = styled.TouchableOpacity`
	width: 50px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BodyContainer = styled.View`
	width: ${percentageCalculation(350, 113)}px;
	height: 75%;
	margin-top: ${responsiveHeight(15)}px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const AddNeCardButton = styled.TouchableOpacity`
	width: 87%;
	height: 50px;
	margin-top: 20px;
	background-color: #def8f9;
	border-radius: 10%;
	border: 2px dotted #72d0d4;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledButtonText = styled.Text`
	font-size: 22px;
	font-weight: 600;
`;

const HideFormButton = styled.TouchableOpacity`
	width: 95%;
	height: 40px;
	margin-top: 20px;
	/* background-color: #f55b6e; */
	border-radius: 10%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;
