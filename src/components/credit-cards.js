import { StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const CreditCards = () => {
	const [userCards, setUserCards] = useState([]);
	useEffect(() => {
		getUserCards();
	}, []);

	const getUserCards = () => {
		axios
			.get("http://192.168.12.37:3000/api/card/getUserCards")
			.then((result) => {
				setUserCards(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<CreditCardsContainer>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 500 }}>Payment Option</Text>
			</TitleContainer>
			{userCards.length !== 0 ? (
				<CreditCardsListContainer
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{userCards.map((card) => {
						return (
							<CreditCard key={card.id} style={styles.boxShadow}>
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
									<CardInfoText>
										{capitalizeWord(card.cardHolderName.split(" ")[0])}{" "}
										{capitalizeWord(card.cardHolderName.split(" ")[1])}
									</CardInfoText>
									<CardInfoText>{card.expiryDate}</CardInfoText>
								</CardInfoContainer>
								<CardNumberContainer>
									<CardNumberText>
										{card.cardNumber.slice(0, 4).split("").join(" ")}
									</CardNumberText>
									<CardNumberText>* * * * * * * * *</CardNumberText>
									<CardNumberText>
										{card.cardNumber.slice(12, 16).split("").join(" ")}
									</CardNumberText>
								</CardNumberContainer>
							</CreditCard>
						);
					})}
				</CreditCardsListContainer>
			) : (
				<NoCreditCard>
					<LinearGradient
						style={styles.LinearGradientStyle}
						colors={["#555", "#777", "#555", "#555", "#667", "#555"]}
						start={{ x: 0, y: 0 }}
						end={{ x: 0.4, y: 1 }}
					/>
					<NoCreditCardText>No cards saved</NoCreditCardText>
				</NoCreditCard>
			)}
		</CreditCardsContainer>
	);
};

export default CreditCards;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		borderColor: "#f0f2f2",
		borderWidth: 0.5,
	},
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

const NoCreditCard = styled.View`
	width: 95%;
	height: 85%;
	background-color: cyan;
	border-radius: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

const NoCreditCardText = styled.Text`
	font-size: 22px;
	font-weight: 600;
	color: white;
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
