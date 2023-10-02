import { StyleSheet, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import { selectCurrentUser } from "../slices/common-slice";

// importing styled components
import * as S from "../components/styled-components";

// importing helper funtions
import { responsiveWidth, responsiveHeight } from "../services/dimensions";
import { capitalizeWord } from "../services/common";
import { showMessage } from "react-native-flash-message";

const HealthRecordsScreen = () => {
	const navigator = useNavigation();

	const currentUser = useSelector(selectCurrentUser);
	const [healthRecords, setHealthRecords] = useState([]);

	useEffect(() => {
		getUserHealthRecords();
	}, []);

	const getUserHealthRecords = () => {
		axios
			.get("http://192.168.12.37:3000/api/health/getUserHealthProfiles")
			.then((result) => {
				setHealthRecords(result.data);
			})
			.catch((error) => {
				console.log(error);
				showMessage({
					message: "Something went wrong. Please try again.",
					description: "Health Records",
					type: "danger",
				});
				navigator.goBack();
			});
	};

	return (
		<S.OuterContainer>
			<HeaderBackground />

			<HeaderTitleContainer>
				<ReturnButtonContainer
					style={styles.boxShadow}
					onPress={() => navigator.goBack()}
				>
					<Icon name="chevron-left" size={35} color="#333" />
				</ReturnButtonContainer>
				<HeaderTitle>Health Records</HeaderTitle>
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
									}}
								>
									{capitalizeWord(currentUser.fullName.split(" ")[0])}{" "}
									{capitalizeWord(currentUser.fullName.split(" ")[1])}
								</Text>
								<Text
									style={{
										fontSize: 18,
										fontWeight: 500,
										color: "#888",
									}}
								>
									{currentUser.phoneNumber}
								</Text>
							</>
						)}
					</UserDetailsContainer>

					<IconButtonContainer style={styles.boxShadow}>
						<Icon name="chevron-right" size={35} color="#444" />
					</IconButtonContainer>
				</UserInfoContainer>

				{healthRecords.length !== 0 && (
					<HealthRecordsListContainer showsVerticalScrollIndicator={false}>
						{healthRecords.map((record) => {
							return (
								<HealthRecordContainer key={record.id} style={styles.boxShadow}>
									<RelativeText>{capitalizeWord(record.relative)}</RelativeText>

									<RecordDetailsContainer>
										<RecordDetail>
											<RecordDetailTitle>Weight</RecordDetailTitle>
											<RecordDetailValue>{record.weight}kg</RecordDetailValue>
										</RecordDetail>
										<RecordDetail>
											<RecordDetailTitle>Height</RecordDetailTitle>
											<RecordDetailValue>{record.height}cm</RecordDetailValue>
										</RecordDetail>
										<RecordDetail>
											<RecordDetailTitle>Blood Group</RecordDetailTitle>
											<RecordDetailValue>
												{record.bloodGroup.toUpperCase()}
											</RecordDetailValue>
										</RecordDetail>
									</RecordDetailsContainer>
								</HealthRecordContainer>
							);
						})}
					</HealthRecordsListContainer>
				)}

				<AddNewProfileButtonContainer
					style={{ bottom: healthRecords.length === 0 ? 550 : 30 }}
				>
					<AddNewProfileButton
						onPress={() => navigator.navigate("CreateHealthProfileScreen")}
					>
						<AddNewProfileButtonText>New Profile +</AddNewProfileButtonText>
					</AddNewProfileButton>
				</AddNewProfileButtonContainer>
			</S.Container>
		</S.OuterContainer>
	);
};

export default HealthRecordsScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
	},
	LinearGradientStyle: {
		width: "100%",
		height: "100%",
		position: "absolute",
		borderRadius: "25%",
		top: 0,
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

const HealthRecordsListContainer = styled.ScrollView`
	width: 100%;
	margin-top: 25px;
	margin-bottom: ${responsiveHeight(13)}px;
	padding: 8px;
	padding-bottom: 20px;
`;

const HealthRecordContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(12)}px;
	margin-bottom: 20px;
	background-color: #f2f9fa;
	border-radius: 25%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	position: relative;
`;

const RelativeText = styled.Text`
	font-size: 22px;
	font-weight: 600;
	color: #667;
`;

const RecordDetailsContainer = styled.View`
	width: 100%;
	height: 35%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const RecordDetail = styled.View`
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const RecordDetailTitle = styled.Text`
	font-size: 17px;
	font-weight: 500;
	color: #999;
`;

const RecordDetailValue = styled.Text`
	font-size: 17px;
	font-weight: 500;
	color: #665;
`;

const AddNewProfileButtonContainer = styled.View`
	width: 95%;
	height: ${responsiveHeight(8)}px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	/* bottom: ${responsiveHeight(5)}px; */
`;

const AddNewProfileButton = styled.TouchableOpacity`
	width: 90%;
	height: 75%;
	background-color: #e3feff;
	border-radius: 8%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddNewProfileButtonText = styled.Text`
	font-size: 21px;
	font-weight: 700;
	color: #30bec3;
`;
