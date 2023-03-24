import { StyleSheet, Text, ImageBackground } from "react-native";
import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";

const VideoCallScreen = () => {
	return (
		<S.OuterContainer style={{ padding: 0, paddingTop: 0 }}>
			<ImageBackground
				style={[styles.imageBackground, { resizeMode: "contain" }]}
				source={require("../../assets/doctor_2.jpeg")}
			/>

			<ReturnButtonContainer>
				<ReturnButton>
					<Icon name="chevron-left" size={35} color="black" />
				</ReturnButton>
			</ReturnButtonContainer>

			<POVCameraOuterContainer>
				<POVCameraContainer style={styles.boxShadow}>
					<POVCamera
						style={{ resizeMode: "cover", borderRadius: 15 }}
						source={require("../../assets/user_image.jpg")}
					/>
				</POVCameraContainer>
			</POVCameraOuterContainer>

			<CallDetails>
				<CallTimer>
					<Icon name="adjust" size={17} color="red" />
					<Text style={{ fontSize: 18, fontWeight: 500 }}>10:34</Text>
				</CallTimer>

				<CalleeInfo>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 600,
							color: "white",
						}}>
						Dr. Ahmed Khaled
					</Text>
					<Text
						style={{
							fontSize: 17,
							fontWeight: 500,
							color: "white",
						}}>
						General Dentist
					</Text>
				</CalleeInfo>
			</CallDetails>

			<CallControlsContainer>
				<CallControlIcon style={{ backgroundColor: "white" }}>
					<Icon name="video-call" size={45} color="#bbb" />
				</CallControlIcon>
				<CallControlIcon style={{ backgroundColor: "red" }}>
					<Icon name="call-end" size={45} color="white" />
				</CallControlIcon>
				<CallControlIcon style={{ backgroundColor: "white" }}>
					<Icon name="mic" size={45} color="#bbb" />
				</CallControlIcon>
			</CallControlsContainer>

			<SwipeUpButton>
				<Text style={{ fontSize: 18, fontWeight: 500, color: "white" }}>
					Swipe up to comment
				</Text>
			</SwipeUpButton>
		</S.OuterContainer>
	);
};

export default VideoCallScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 3,
		borderColor: "#f0f2f2",
		borderWidth: 0.5,
	},
	imageBackground: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
	},
});

const ReturnButtonContainer = styled.View`
	width: 95%;
	height: 45px;
	margin-top: ${responsiveHeight(8)}px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
`;

const ReturnButton = styled.TouchableOpacity`
	width: 45px;
	height: 100%;
	background-color: white;
	border-radius: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const POVCameraOuterContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(20)}px;
	margin-top: ${responsiveHeight(32)}px;
	padding-right: 25px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const POVCameraContainer = styled.View`
	width: ${responsiveHeight(15)}px;
	height: 100%;
	padding: 3px;
	background-color: white;
	border-radius: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 3px solid white;
`;

const POVCamera = styled.Image`
	width: 100%;
	height: 100%;
`;

const CallDetails = styled.View`
	width: 100%;
	height: ${responsiveHeight(12)}px;
	margin-top: 5px;
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const CallTimer = styled.View`
	width: ${responsiveHeight(9)}px;
	height: 35%;
	margin-left: 15px;
	padding-left: 5px;
	padding-right: 5px;
	background-color: white;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

const CalleeInfo = styled.View`
	width: 100%;
	height: 50%;
	padding-left: 15px;
	background-color: rgba(1, 1, 1, 0.4);
	border-radius: 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const CallControlsContainer = styled.View`
	width: 90%;
	height: ${responsiveHeight(11)}px;
	margin-top: 30px;
	background-color: rgba(255, 255, 255, 0.75);
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const CallControlIcon = styled.TouchableOpacity`
	width: 65px;
	height: 65px;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const SwipeUpButton = styled.TouchableOpacity`
	width: 100%;
	height: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 20px;
`;
