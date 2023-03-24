import { StyleSheet, Text } from "react-native";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
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

// importing sub-components
import CalendarIcon from "../sub-components/calendar-icon";
import PaperPlaneIcon from "../sub-components/paper-plane-icon";

const QAScreen = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const currentUser = useSelector(selectCurrentUser);
	const textInputRef = useRef();

	const handleSubmitEditing = () => {
		// This will dismiss the keyboard
		textInputRef.current.blur();
	};

	return (
		<S.OuterContainer>
			<HeaderBackground />

			<HeaderTitleContainer>
				<ReturnButtonContainer
					style={styles.boxShadow}
					onPress={() => navigator.goBack()}>
					<Icon name="chevron-left" size={35} color="#333" />
				</ReturnButtonContainer>
				<HeaderTitle>Questions For Doctors</HeaderTitle>
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
										fontSize: 22,
										fontWeight: 600,
										color: "#444",
										marginBottom: 10,
									}}>
									{capitalizeWord(currentUser.fullName.split(" ")[0])}{" "}
									{capitalizeWord(currentUser.fullName.split(" ")[1])}
								</Text>
								<TextContainer>
									<Icon name="person" size={22} color="#5e42e3" />
									<StyledText>
										{capitalizeWord(currentUser.gender)}
									</StyledText>
								</TextContainer>

								<TextContainer>
									<CalendarIcon
										marginLeft={4}
										color="#30bec3"
										size={18}
									/>
									<StyledText>
										{new window.Date(
											currentUser.DOB
										).toLocaleDateString()}
									</StyledText>
								</TextContainer>
							</>
						)}
					</UserDetailsContainer>
				</UserInfoContainer>

				<TextAreaContainer style={styles.boxShadow}>
					<QATextInput
						blurOnSubmit={true}
						placeholder="Type something"
						multiline={true}
						numberOfLines={6}
						returnKeyType="done"
					/>

					<TextAreaControllersContainer>
						<TextAreaController>
							<Icon name="photo-camera" size={23} color="#b1b4b5" />
						</TextAreaController>

						<TextAreaController>
							<PaperPlaneIcon size={20} color="#b1b4b5" />
						</TextAreaController>
					</TextAreaControllersContainer>
				</TextAreaContainer>
			</S.Container>
		</S.OuterContainer>
	);
};

export default QAScreen;

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
	height: ${responsiveHeight(14)}px;
	margin-top: ${responsiveHeight(15)}px;
	padding: 18px;
	background-color: white;
	border-radius: 18%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
`;

const UserImageContainer = styled.View`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	overflow: hidden;
`;

const UserImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const UserDetailsContainer = styled.View`
	width: 64%;
	height: 100%;
	margin-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

const TextContainer = styled.View`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const StyledText = styled.Text`
	margin-left: 8px;
	font-size: 17px;
	font-weight: 600;
	color: #889;
`;

const TextAreaContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(30)}px;
	margin-top: 20px;
	padding: 15px;
	background-color: white;
	border-radius: 15%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const QATextInput = styled.TextInput`
	width: 100%;
	height: 78%;
	font-size: 20px;
	vertical-align: top;
	text-align: left;
`;

const TextAreaControllersContainer = styled.View`
	width: 100%;
	height: 17%;
	padding-left: 10px;
	padding-right: 10px;
	background-color: #f2f4f5;
	border-radius: 15%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const TextAreaController = styled.TouchableOpacity`
	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center; ;
`;
