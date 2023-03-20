import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

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
				<CreditCards />

				<AddNeCardButton>
					<AddNeCardButtonText>+ Add New Card</AddNeCardButtonText>
				</AddNeCardButton>

				<AddCardForm />
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
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px dotted #72d0d4;
`;

const AddNeCardButtonText = styled.Text`
	font-size: 22px;
	font-weight: 600;
	color: #72d0d4; ;
`;
