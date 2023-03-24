import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing styled components
import * as S from "../components/styled-components";

// importing helper funtions
import { responsiveWidth, responsiveHeight } from "../services/dimensions";

const ConsultationHistoryScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<HeaderBackground />

			<HeaderTitleContainer>
				<ReturnButtonContainer
					style={styles.boxShadow}
					onPress={() => navigator.goBack()}>
					<Icon name="chevron-left" size={35} color="#333" />
				</ReturnButtonContainer>
				<HeaderTitle>Advisory List</HeaderTitle>
			</HeaderTitleContainer>

			<S.Container>
				<SessionsListContainer>
					<SessionContainer style={styles.boxShadow}>
						<DoctorImageContainer>
							<DoctorImage
								style={{ resizeMode: "cover", borderRadius: 18 }}
								source={require("../../assets/doctor_2.jpeg")}
							/>
							<DoctorActiveIndicator />
						</DoctorImageContainer>

						<SessionDetailsContainer>
							<DoctorNameContainer>
								<DoctorName>Dr. Chikanso Chima</DoctorName>
							</DoctorNameContainer>

							<SessionMessageContainer>
								<SessionMessage>
									The consultation has not yet started!
								</SessionMessage>
							</SessionMessageContainer>

							<SessionTimeAndStatusContainer>
								<SessionTimingContainer>
									<Icon name="access-time" size={15} color="#999" />
									<SessionTiming>09:30 AM</SessionTiming>
								</SessionTimingContainer>

								<SessionStatus>
									<Icon
										name="phone-iphone"
										size={12}
										color="#8068e9"
									/>
									<Text
										style={{
											fontSize: 14,
											fontWeight: 700,
											color: "#8068e9",
										}}>
										Finished
									</Text>
								</SessionStatus>
							</SessionTimeAndStatusContainer>
						</SessionDetailsContainer>
					</SessionContainer>

					<SessionContainer style={styles.boxShadow}>
						<DoctorImageContainer>
							<DoctorImage
								style={{ resizeMode: "cover", borderRadius: 18 }}
								source={require("../../assets/doctor_3.jpeg")}
							/>
							<DoctorActiveIndicator />
						</DoctorImageContainer>

						<SessionDetailsContainer>
							<DoctorNameContainer>
								<DoctorName>Dr. Christina Smith</DoctorName>
							</DoctorNameContainer>

							<SessionMessageContainer>
								<SessionMessage>
									The consultation has not yet started!
								</SessionMessage>
							</SessionMessageContainer>

							<SessionTimeAndStatusContainer>
								<SessionTimingContainer>
									<Icon name="access-time" size={15} color="#999" />
									<SessionTiming>09:30 AM</SessionTiming>
								</SessionTimingContainer>

								<SessionStatus>
									<Icon
										name="phone-iphone"
										size={12}
										color="#8068e9"
									/>
									<Text
										style={{
											fontSize: 14,
											fontWeight: 700,
											color: "#8068e9",
										}}>
										Finished
									</Text>
								</SessionStatus>
							</SessionTimeAndStatusContainer>
						</SessionDetailsContainer>
					</SessionContainer>

					<SessionContainer style={styles.boxShadow}>
						<DoctorImageContainer>
							<DoctorImage
								style={{ resizeMode: "cover", borderRadius: 18 }}
								source={require("../../assets/doctor_4.jpeg")}
							/>
							<DoctorActiveIndicator />
						</DoctorImageContainer>

						<SessionDetailsContainer>
							<DoctorNameContainer>
								<DoctorName>Dr. James Brown</DoctorName>
							</DoctorNameContainer>

							<SessionMessageContainer>
								<SessionMessage>
									The consultation has not yet started!
								</SessionMessage>
							</SessionMessageContainer>

							<SessionTimeAndStatusContainer>
								<SessionTimingContainer>
									<Icon name="access-time" size={15} color="#999" />
									<SessionTiming>09:30 AM</SessionTiming>
								</SessionTimingContainer>

								<SessionStatus>
									<Icon
										name="phone-iphone"
										size={12}
										color="#8068e9"
									/>
									<Text
										style={{
											fontSize: 14,
											fontWeight: 700,
											color: "#8068e9",
										}}>
										Finished
									</Text>
								</SessionStatus>
							</SessionTimeAndStatusContainer>
						</SessionDetailsContainer>
					</SessionContainer>
				</SessionsListContainer>

				<UrgentContactButtonContainer style={styles.boxShadow}>
					<S.ContinueButton>
						<S.ContinueButtonText>Urgent Contact</S.ContinueButtonText>
					</S.ContinueButton>
				</UrgentContactButtonContainer>
			</S.Container>
		</S.OuterContainer>
	);
};

export default ConsultationHistoryScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.3,
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

const SessionsListContainer = styled.ScrollView`
	width: 100%;
	margin-top: ${responsiveHeight(14)}px;
	padding: 5px;
`;

const SessionContainer = styled.TouchableOpacity`
	width: 100%;
	height: ${responsiveHeight(13)}px;
	margin-bottom: 20px;
	padding: 8px;
	background-color: white;
	border-radius: 20%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const DoctorImageContainer = styled.View`
	width: 30%;
	height: 100%;
	border-radius: 18%;
	position: relative;
`;

const DoctorImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const DoctorActiveIndicator = styled.View`
	width: 14px;
	height: 14px;
	background-color: #1fe059;
	border-radius: 100%;
	border: 2px solid white;
	position: absolute;
	top: 1px;
	right: 4px;
	z-index: 1;
`;

const SessionDetailsContainer = styled.View`
	width: 65.5%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const DoctorNameContainer = styled.View`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const DoctorName = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: #444;
`;

const SessionMessageContainer = styled.View`
	width: 100%;
	height: 40%;
`;

const SessionMessage = styled.Text`
	font-size: 17px;
	font-weight: 500;
	color: #888;
`;

const SessionTimeAndStatusContainer = styled.View`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const SessionTimingContainer = styled.View`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const SessionTiming = styled.Text`
	margin-left: 5px;
	font-size: 15px;
	font-weight: 600;
	color: #999;
`;

const SessionStatus = styled.View`
	width: 35%;
	height: 65%;
	background-color: #e3dcff;
	border-radius: 7%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const UrgentContactButtonContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(10)}px;
	background-color: white;
	border-radius: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: ${responsiveHeight(4)}px;
`;
