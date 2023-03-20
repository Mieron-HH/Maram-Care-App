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
		</S.OuterContainer>
	);
};

export default VideoCallScreen;

const styles = StyleSheet.create({
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
	margin-top: ${responsiveHeight(10)}px;
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
