import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

// importing states and actions
import { setPaymentPlan } from "../slices/payment-slice.js";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";

// importing sub components
import Triangle from "../sub-components/triangle-svg";

const PaymentPlans = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const handleOnPlanSelect = (plan) => {
		dispatch(setPaymentPlan(plan));
		navigator.navigate("PaymentMethodScreen");
	};
	return (
		<PaymentPlansListContainer>
			<PaymentPlan
				style={[styles.boxShadow, { marginRight: 35 }]}
				onPress={() => handleOnPlanSelect("visit")}>
				<PlanHeaderContainer style={{ backgroundColor: "#7234f8" }}>
					<Triangle color="#7234f8" />
					<Icon
						style={{ marginRight: 5 }}
						name="pending-actions"
						size={18}
						color="white"
					/>
					<PlanHeaderText>Visit</PlanHeaderText>
				</PlanHeaderContainer>
				<PlanPriceContainer>
					<PlanPriceNumber>50</PlanPriceNumber>
					<Text style={{ fontSize: 25, color: "#7234f8" }}>AED</Text>
				</PlanPriceContainer>
				<PlanButton style={{ backgroundColor: "#7234f8" }}>
					<PlanButtonText>Book Now</PlanButtonText>
				</PlanButton>
			</PaymentPlan>
			<PaymentPlan
				style={[styles.boxShadow, { marginleft: 35 }]}
				onPress={() => handleOnPlanSelect("monthly")}>
				<PlanHeaderContainer style={{ backgroundColor: "#2e1295" }}>
					<Triangle color="#2e1295" />
					<Icon
						style={{ marginRight: 5 }}
						name="pending-actions"
						size={18}
						color="white"
					/>
					<PlanHeaderText>Monthly</PlanHeaderText>
				</PlanHeaderContainer>
				<PlanPriceContainer>
					<PlanPriceNumber>100</PlanPriceNumber>
					<Text style={{ fontSize: 25, color: "#7234f8" }}>AED</Text>
				</PlanPriceContainer>
				<PlanButton style={{ backgroundColor: "#2e1295" }}>
					<PlanButtonText>Subscribe Now</PlanButtonText>
				</PlanButton>
			</PaymentPlan>
			<PaymentPlan
				style={styles.boxShadow}
				onPress={() => handleOnPlanSelect("yearly")}>
				<PlanHeaderContainer style={{ backgroundColor: "#2dcbd0" }}>
					<Triangle color="#2dcbd0" />
					<Icon
						style={{ marginRight: 5 }}
						name="pending-actions"
						size={18}
						color="white"
					/>
					<PlanHeaderText>Yearly</PlanHeaderText>
				</PlanHeaderContainer>
				<PlanPriceContainer>
					<PlanPriceNumber>1,200</PlanPriceNumber>
					<Text style={{ fontSize: 25, color: "#7234f8" }}>AED</Text>
				</PlanPriceContainer>
				<PlanButton style={{ backgroundColor: "#2dcbd0" }}>
					<PlanButtonText>Subscribe Now</PlanButtonText>
				</PlanButton>
			</PaymentPlan>
		</PaymentPlansListContainer>
	);
};

export default PaymentPlans;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const PaymentPlansListContainer = styled.View`
	width: 100%;
	height: 70%;
	margin-top: 50px;
	flex-wrap: wrap;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const PaymentPlan = styled.TouchableOpacity`
	width: 38%;
	height: ${responsiveHeight(17)}px;
	margin-bottom: 25px;
	background-color: white;
	border-radius: 18%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const PlanHeaderContainer = styled.View`
	width: 100%;
	height: 25%;
	border-top-left-radius: 18%;
	border-top-right-radius: 18%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const PlanHeaderText = styled.Text`
	font-size: 18px;
	font-weight: 500;
	color: white;
`;

const PlanPriceContainer = styled.View`
	width: 100%;
	height: 30%;
	margin-top: 15%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const PlanPriceNumber = styled.Text`
	font-size: 35px;
	font-weight: 600;
	color: #2e1295;
`;

const PlanButton = styled.View`
	width: 80%;
	height: 25px;
	margin-top: 5%;
	border-radius: 8%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PlanButtonText = styled.Text`
	font-size: 16px;
	font-weight: 600;
	color: white;
`;
