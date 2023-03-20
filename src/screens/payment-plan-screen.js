import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing components
import PaymentPlans from "../components/payment-plans";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
} from "../services/dimensions";

const PaymentPlanScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<HeaderContainer style={styles.boxShadow}>
				<ReturnButtonContainer>
					<ReturnButton onPress={() => navigator.goBack()}>
						<Icon name="chevron-left" size={40} color="black" />
					</ReturnButton>
					<Text style={styles.screenTitle}>Payment Plan</Text>
				</ReturnButtonContainer>
			</HeaderContainer>

			<BodyContainer>
				<PaymentPlanGuide>
					<Text style={{ fontSize: 17, color: "#333", fontWeight: 600 }}>
						Choose Your Best Plan
					</Text>
					<Text style={{ fontSize: 15, color: "#555" }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
						do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip.
					</Text>
				</PaymentPlanGuide>

				<PaymentPlans />
			</BodyContainer>
		</S.OuterContainer>
	);
};

export default PaymentPlanScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	screenTitle: {
		width: "30%",
		fontSize: 20,
		fontWeight: 500,
		textAlign: "center",
		position: "absolute",
		left: "35%",
	},
	SVG: {
		width: "100%",
		height: "50%",
		position: "abosolute",
		borderColor: "red",
		borderWidth: 2,
		bottom: "-50%",
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
	margin-top: ${responsiveHeight(2)}px;
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
	margin-top: ${responsiveHeight(18)}px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const PaymentPlanGuide = styled.View`
	width: 100%;
	height: 15%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;
