import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// importing helper functions
import { responsiveHeight, responsiveWidth } from "../services/dimensions";

const CreditCards = () => {
	return (
		<CreditCardsContainer>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 500 }}>
					Payment Option
				</Text>
			</TitleContainer>
			<CreditCardsListContainer
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					justifyContent: "center",
					alignItems: "center",
				}}>
				<CreditCard>
					<LinearGradient
						style={styles.LinearGradientStyle}
						colors={[
							"#9669fa",
							"#8250fa",
							"#783cfa",
							"#783cfa",
							"#498fc4",
							"#498fc4",
							"#7cd9cf",
							"#6473e6",
							"#5f7ce6",
						]}
						start={{ x: 0, y: 0 }}
						end={{ x: 0.4, y: 1 }}
					/>
					<CardIdentifierImageContainer>
						<CardIdentifierImage
							style={{ resizeMode: "cover" }}
							source={require("../../assets/credit_card_identifier.png")}
						/>
					</CardIdentifierImageContainer>
					<CardInfoContainer>
						<CardInfoText>Azhar Dwi</CardInfoText>
						<CardInfoText>12/24</CardInfoText>
					</CardInfoContainer>
					<CardNumberContainer>
						<CardNumberText>1 2 3 4</CardNumberText>
						<CardNumberText>* * * * * * * * *</CardNumberText>
						<CardNumberText>2 1 1 5</CardNumberText>
					</CardNumberContainer>
				</CreditCard>
			</CreditCardsListContainer>
		</CreditCardsContainer>
	);
};

export default CreditCards;

const styles = StyleSheet.create({
	LinearGradientStyle: {
		width: "100%",
		height: "100%",
		position: "absolute",
		borderRadius: "25%",
		top: 0,
	},
});

const CreditCardsContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(25)}px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const TitleContainer = styled.View`
	width: 100%;
	height: 12%;
	padding-left: 10px;
	text-align: left;
`;

const CreditCardsListContainer = styled.ScrollView`
	width: 96%;
	padding: 5px;
`;

const CreditCard = styled.View`
	width: 370px;
	height: 100%;
	margin-right: 30px;
	background-color: cyan;
	border-radius: 25%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

const CardIdentifierImageContainer = styled.View`
	width: 90%;
	height: 25px;
	margin-top: 25px;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const CardIdentifierImage = styled.Image`
	width: 45px;
	height: 100%;
	border-radius: 6px;
`;

const CardInfoContainer = styled.View`
	width: 90%;
	height: 12%;
	margin-top: 14%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const CardInfoText = styled.Text`
	font-size: 21px;
	font-weight: 600;
	color: white;
`;

const CardNumberContainer = styled.View`
	width: 90%;
	height: 15%;
	margin-top: 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const CardNumberText = styled.Text`
	font-size: 30px;
	font-weight: 600;
	color: white;
`;
