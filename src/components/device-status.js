import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

// importing helper functions
import { responsiveHeight, responsiveWidth } from "../services/dimensions";

const DeviceStatus = ({ name, batteryPercent, BTStatus, marginTop = 0 }) => {
	return (
		<DeviceStatusContainer style={[styles.boxShadow, { marginTop }]}>
			<LinearGradient
				style={styles.LinearGradientStyle}
				colors={["white", "#f5fbfe", "#ccf3f5"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
			/>
			<DeviceStatusImageContainer>
				<DeviceStatusImage
					style={{ resizeMode: "contain" }}
					source={require("../../assets/device_status.png")}
				/>
			</DeviceStatusImageContainer>
		</DeviceStatusContainer>
	);
};

export default DeviceStatus;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	LinearGradientStyle: {
		width: "100%",
		height: "100%",
		borderRadius: "28%",
		position: "absolute",
		top: 0,
		left: 0,
		borderColor: "red",
		borderWidth: 1,
	},
});

const DeviceStatusContainer = styled.View`
	width: 98%;
	height: ${responsiveHeight(9)}px;
	border-radius: 28%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: relative;
	border: 1px solid red;
`;

const DeviceStatusImageContainer = styled.View`
	width: ${responsiveWidth(10)}px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 30px;
`;

const DeviceStatusImage = styled.Image`
	width: 70%;
	height: 70%;
`;
