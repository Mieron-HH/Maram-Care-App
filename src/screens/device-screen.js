import { StyleSheet, Text } from "react-native";
import React from "react";
import styled from "styled-components";

// importing components
import NavigationBar from "../components/navigation-bar";
import DeviceStatus from "../components/device-status";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";

const DeviceScreen = () => {
	return (
		<S.OuterContainer>
			<HeaderContainer style={styles.boxShadow}>
				<ReturnButtonContainer>
					{/* <ReturnButton onPress={() => navigator.navigate("HomeScreen")}>
						<Icon name="chevron-left" size={40} color="black" />
					</ReturnButton> */}
					<Text style={styles.screenTitle}>Devices</Text>
				</ReturnButtonContainer>
			</HeaderContainer>

			<S.Container>
				<DeviceStatus
					name="MaramCare"
					batteryPercent={100}
					BTStatus="Connected"
					marginTop={69}
				/>

				<AddExternalExamButton>
					<AddExternalExamButtonText>
						+ Add external exam
					</AddExternalExamButtonText>
				</AddExternalExamButton>

				<HealthInfoListContainer>
					<HealthInfoContainer style={styles.boxShadow}>
						<HealthInfoHeader>
							<HealthInfoHeaderTitle>Heart Rate</HealthInfoHeaderTitle>
							<HealthInfoHeaderDate>01/24</HealthInfoHeaderDate>
						</HealthInfoHeader>
						<HealthInfoImageContainer>
							<HealthInfoImage
								style={{ resizeMode: "cover" }}
								source={require("../../assets/heart_rate_image.png")}
							/>
						</HealthInfoImageContainer>
						<HealthInfoResults>
							<HealthInfoResultsText>
								70
								<Text
									style={{
										fontSize: 13,
										fontWeight: 600,
										color: "#999",
									}}>
									T/min
								</Text>
							</HealthInfoResultsText>
						</HealthInfoResults>
					</HealthInfoContainer>

					<HealthInfoContainer style={styles.boxShadow}>
						<HealthInfoHeader>
							<HealthInfoHeaderTitle>
								Blood Pressure
							</HealthInfoHeaderTitle>
							<HealthInfoHeaderDate>01/24</HealthInfoHeaderDate>
						</HealthInfoHeader>
						<HealthInfoImageContainer>
							<HealthInfoImage
								style={{ resizeMode: "cover" }}
								source={require("../../assets/blood_pressure_image.png")}
							/>
						</HealthInfoImageContainer>
						<HealthInfoResults>
							<HealthInfoResultsText>
								129/79
								<Text
									style={{
										fontSize: 13,
										fontWeight: 600,
										color: "#999",
									}}>
									mnHg
								</Text>
							</HealthInfoResultsText>
						</HealthInfoResults>
					</HealthInfoContainer>

					<HealthInfoContainer style={styles.boxShadow}>
						<HealthInfoHeader>
							<HealthInfoHeaderTitle>Blood Sugar</HealthInfoHeaderTitle>
							<HealthInfoHeaderDate>01/24</HealthInfoHeaderDate>
						</HealthInfoHeader>
						<HealthInfoImageContainer>
							<HealthInfoImage
								style={{ resizeMode: "cover" }}
								source={require("../../assets/blood_sugar_image.png")}
							/>
						</HealthInfoImageContainer>
						<HealthInfoResults>
							<HealthInfoResultsText>
								4.7
								<Text
									style={{
										fontSize: 13,
										fontWeight: 600,
										color: "#999",
									}}>
									mmol/L
								</Text>
							</HealthInfoResultsText>
						</HealthInfoResults>
					</HealthInfoContainer>

					<HealthInfoContainer style={styles.boxShadow}>
						<HealthInfoHeader>
							<HealthInfoHeaderTitle>Blood Oxygen</HealthInfoHeaderTitle>
							<HealthInfoHeaderDate>01/24</HealthInfoHeaderDate>
						</HealthInfoHeader>
						<HealthInfoImageContainer>
							<HealthInfoImage
								style={{ resizeMode: "cover" }}
								source={require("../../assets/blood_oxygen_image.png")}
							/>
						</HealthInfoImageContainer>
						<HealthInfoResults>
							<HealthInfoResultsText>
								70
								<Text
									style={{
										fontSize: 13,
										fontWeight: 600,
										color: "#999",
									}}>
									SpO2
								</Text>
							</HealthInfoResultsText>
						</HealthInfoResults>
					</HealthInfoContainer>
				</HealthInfoListContainer>
			</S.Container>
			<NavigationBar />
		</S.OuterContainer>
	);
};

export default DeviceScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	screenTitle: {
		width: "30%",
		fontSize: 22,
		fontWeight: 600,
		textAlign: "center",
		position: "absolute",
		left: "35%",
	},
});

const HeaderContainer = styled.View`
	width: 100%;
	height: 18%;
	background-color: white;
	border-bottom-left-radius: 20%;
	border-bottom-right-radius: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
`;

const ReturnButtonContainer = styled.View`
	width: 98%;
	height: ${responsiveHeight(5)}px;
	margin-top: ${responsiveHeight(2)}px;
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	position: relative;
`;

const ReturnButton = styled.TouchableOpacity`
	width: 50px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddExternalExamButton = styled.TouchableOpacity`
	width: 57%;
	height: 45px;
	margin-top: 25px;
	background-color: #7234f8;
	border-radius: 12%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const AddExternalExamButtonText = styled.Text`
	font-size: 22px;
	font-weight: 700;
	color: white;
`;

const HealthInfoListContainer = styled.View`
	width: 100%;
	height: 50%;
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

const HealthInfoContainer = styled.TouchableOpacity`
	width: 48%;
	height: ${responsiveHeight(20)}px;
	margin-bottom: 20px;
	background-color: white;
	border-radius: 13%;
`;

const HealthInfoHeader = styled.View`
	width: 100%;
	height: 28%;
	padding-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const HealthInfoHeaderTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: black;
`;

const HealthInfoHeaderDate = styled.Text`
	font-size: 15px;
	font-weight: 500;
	color: #999;
`;

const HealthInfoImageContainer = styled.View`
	width: 100%;
	height: 44%;
`;

const HealthInfoImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const HealthInfoResults = styled.View`
	width: 100%;
	height: 28%;
	padding-left: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const HealthInfoResultsText = styled.Text`
	font-size: 22px;
	font-weight: bold;
	color: black;
`;
