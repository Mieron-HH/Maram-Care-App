import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styled from "styled-components";
import { showMessage } from "react-native-flash-message";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectCurrentUser,
	setUserDataFetched,
	resetUserInfo,
} from "../slices/common-slice";

// importing components
import NavigationBar from "../components/navigation-bar";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import { responsiveHeight, responsiveWidth } from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const UserProfileScreen = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const currentUser = useSelector(selectCurrentUser);

	const logoutUser = async (e) => {
		e.preventDefault();

		await axios
			.get("http://192.168.100.167:3000/api/user/signout")
			.then(() => {
				dispatch(setUserDataFetched(false));
				dispatch(resetUserInfo(""));
				navigator.replace("LoginScreen");
			})
			.catch((error) => {
				console.log(error);
				showMessage({
					message: "Something went wrong. Please try again.",
					description: "Authentication",
					type: "danger",
				});
			});
	};
	return (
		<S.OuterContainer>
			<HeaderBackground>
				<HeaderTitleContainer>
					<HeaderTitle>Profile</HeaderTitle>
				</HeaderTitleContainer>
			</HeaderBackground>

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

				<ProfileButtonsListContainer style={styles.boxShadow}>
					<ProfileButtonContainer
						onPress={() => navigator.navigate("ProfileScreen")}>
						<Icon name="person" size={28} color="#5e42e3" />
						<ProfileButtonText>Profile</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer
						onPress={() => navigator.navigate("QAScreen")}>
						<Icon name="history" size={28} color="#5e42e3" />
						<ProfileButtonText>Q & A History</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer>
						<Icon name="place" size={28} color="#5e42e3" />
						<ProfileButtonText>Address</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer
						onPress={() => navigator.navigate("PaymentMethodScreen")}>
						<Icon name="credit-card" size={28} color="#5e42e3" />
						<ProfileButtonText>Payment Method</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer>
						<Icon name="support-agent" size={28} color="#5e42e3" />
						<ProfileButtonText>Help Center</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer>
						<Icon name="phone-iphone" size={28} color="#5e42e3" />
						<ProfileButtonText>Hotline</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer>
						<Icon name="info" size={28} color="#5e42e3" />
						<ProfileButtonText>About Us</ProfileButtonText>
					</ProfileButtonContainer>
					<ProfileButtonContainer onPress={logoutUser}>
						<Icon name="person" size={28} color="#ff575b" />
						<ProfileButtonText style={{ color: "#ff575b" }}>
							Logout
						</ProfileButtonText>
					</ProfileButtonContainer>
				</ProfileButtonsListContainer>
			</S.Container>

			<NavigationBar />
		</S.OuterContainer>
	);
};

export default UserProfileScreen;

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
	height: ${responsiveHeight(23)}px;
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
	margin-top: ${responsiveHeight(6)}px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderTitle = styled.Text`
	font-size: 22px;
	font-weight: 600;
	color: white;
`;

const UserInfoContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(9)}px;
	margin-top: ${responsiveHeight(13)}px;
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

const ProfileButtonsListContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(50)}px;
	margin-top: 25px;
	padding-top: 10px;
	background-color: white;
	border-radius: 15%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const ProfileButtonContainer = styled.TouchableOpacity`
	width: 90%;
	height: 10%;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const ProfileButtonText = styled.Text`
	margin-left: 10px;
	font-size: 21px;
	font-weight: 500;
	color: #333;
`;
