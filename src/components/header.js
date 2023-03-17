import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/FontAwesome";

// importing helper functions
import { responsiveHeight, responsiveWidth } from "../services/dimensions";

const Header = () => {
	return (
		<HeaderContainer>
			<UserContainer>
				<UserImageContainer>
					<UserImage
						style={{ resizeMode: "contain" }}
						source={require("../../assets/user_image.png")}
					/>
				</UserImageContainer>
				<UserName>Hello Alii</UserName>
			</UserContainer>
			<NotificationBellContainer>
				<Icon name="bell" size={18} color="purple" />
			</NotificationBellContainer>
		</HeaderContainer>
	);
};

export default Header;

const styles = StyleSheet.create({});

const HeaderContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(5)}px;
	padding-left: ${responsiveWidth(3)}px;
	padding-right: ${responsiveWidth(3)}px;
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
