import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

// importing states and actions
import {
	selectCurrentUser,
	selectUserDataFetched,
} from "../slices/common-slice";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const Header = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const userDataFetched = useSelector(selectUserDataFetched);
	const currentUser = useSelector(selectCurrentUser);

	useEffect(() => {
		if (currentUser === null && userDataFetched)
			navigator.replace("LoginScreen");
	}, [currentUser]);

	return userDataFetched ? (
		<HeaderContainer>
			<UserContainer>
				<UserImageContainer>
					<UserImage
						style={{ resizeMode: "contain" }}
						source={require("../../assets/user_image_rounded.png")}
					/>
				</UserImageContainer>
				<UserName>
					Hello{" "}
					{currentUser !== null &&
						capitalizeWord(currentUser.fullName.split(" ")[0])}
				</UserName>
			</UserContainer>
			<NotificationBellContainer>
				<Icon name="bell" size={18} color="#2e1295" />
			</NotificationBellContainer>
		</HeaderContainer>
	) : (
		<></>
	);
};

export default Header;

const styles = StyleSheet.create({});

const HeaderContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(5)}px;
	padding-left: 10px;
	padding-right: 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const UserContainer = styled.View`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const UserImageContainer = styled.TouchableOpacity`
	width: ${responsiveHeight(4.5)}px;
	height: ${responsiveHeight(4.5)}px;
	border-radius: 100%;
`;

const UserImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const UserName = styled.Text`
	margin-left: 10px;
	font-size: 22px;
	font-weight: 500;
`;

const NotificationBellContainer = styled.TouchableOpacity`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;
