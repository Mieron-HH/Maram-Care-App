import { StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import { selectCurrentUser } from "../slices/common-slice";

// importing styled components
import * as S from "../components/styled-components";

// importing helper funtions
import { responsiveWidth, responsiveHeight } from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const ProfileScreen = () => {
	const navigator = useNavigation();

	const currentUser = useSelector(selectCurrentUser);

	return (
		<S.OuterContainer>
			<HeaderBackground />

			<HeaderTitleContainer>
				<ReturnButtonContainer
					style={styles.boxShadow}
					onPress={() => navigator.goBack()}>
					<Icon name="chevron-left" size={35} color="#333" />
				</ReturnButtonContainer>
				<HeaderTitle>Profile</HeaderTitle>
			</HeaderTitleContainer>

			<S.Container>
				<UserInfoContainer style={styles.boxShadow}>
					<UserImageContainer>
						<UserImage
							styled={{ resizeMode: "contain" }}
							source={require("../../assets/user_image.jpg")}
						/>
					</UserImageContainer>

					<UserDetailsContainer>
						{currentUser !== null && (
							<>
								<Text
									style={{
										fontSize: 21,
										fontWeight: 600,
										color: "#333",
									}}>
									{capitalizeWord(currentUser.fullName.split(" ")[0])}{" "}
									{capitalizeWord(currentUser.fullName.split(" ")[1])}
								</Text>
								<Text
									style={{
										fontSize: 18,
										fontWeight: 500,
										color: "#888",
									}}>
									{currentUser.phoneNumber}
								</Text>
							</>
						)}
					</UserDetailsContainer>

					<IconButtonContainer style={styles.boxShadow}>
						<Icon name="chevron-right" size={35} color="#444" />
					</IconButtonContainer>
				</UserInfoContainer>

				<OptionsListContainer>
					<OptionContainer
						style={styles.boxShadow}
						onPress={() => navigator.navigate("HealthRecordsScreen")}>
						<OptionImageContainer>
							<OptionImage
								style={{ resizeMode: "contain" }}
								source={require("../../assets/family_image.png")}
							/>
						</OptionImageContainer>

						<OptionTextContainer>
							<OptionText>Health records</OptionText>
						</OptionTextContainer>
					</OptionContainer>

					<OptionContainer
						style={styles.boxShadow}
						onPress={() =>
							navigator.navigate("ConsultationHistoryScreen")
						}>
						<OptionImageContainer>
							<OptionImage
								style={{ resizeMode: "contain" }}
								source={require("../../assets/family_image.png")}
							/>
						</OptionImageContainer>

						<OptionTextContainer>
							<OptionText>Consultation history</OptionText>
						</OptionTextContainer>
					</OptionContainer>

					<OptionContainer style={styles.boxShadow}>
						<OptionImageContainer>
							<OptionImage
								style={{ resizeMode: "contain" }}
								source={require("../../assets/family_image.png")}
							/>
						</OptionImageContainer>

						<OptionTextContainer>
							<OptionText>Health monitoring</OptionText>
						</OptionTextContainer>
					</OptionContainer>

					<OptionContainer style={styles.boxShadow}>
						<OptionImageContainer>
							<OptionImage
								style={{ resizeMode: "contain" }}
								source={require("../../assets/family_image.png")}
							/>
						</OptionImageContainer>

						<OptionTextContainer>
							<OptionText>Calendar reminder</OptionText>
						</OptionTextContainer>
					</OptionContainer>
				</OptionsListContainer>
			</S.Container>
		</S.OuterContainer>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 1, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const HeaderBackground = styled.View`
	width: ${responsiveWidth(100)}px;
	height: ${responsiveHeight(25)}px;
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

const UserInfoContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(9)}px;
	margin-top: ${responsiveHeight(15)}px;
	padding: 8px;
	background-color: white;
	border-radius: 15%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const UserImageContainer = styled.View`
	width: 20%;
	height: 100%;
	border-radius: 15%;
	overflow: hidden;
`;

const UserImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const UserDetailsContainer = styled.View`
	width: 64%;
	height: 70%;
	margin-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const IconButtonContainer = styled.View`
	width: 12%;
	height: 70%;
	background-color: white;
	border-radius: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OptionsListContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(23)}px;
	margin-top: 25px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

const OptionContainer = styled.TouchableOpacity`
	width: 47%;
	height: 40%;
	margin-bottom: 20px;
	padding: 10px;
	background-color: white;
	border-radius: 17%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const OptionImageContainer = styled.View`
	width: 35%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OptionImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const OptionTextContainer = styled.View`
	width: 58%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const OptionText = styled.Text`
	font-size: 18px;
	font-weight: 600;
	color: #555;
`;
