import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing helper functions
import {
	responsiveHeight,
	percentageCalculation,
} from "../services/dimensions";

// importing sub-components
import BatteryIcon from "../sub-components/battery-icon";

const DeviceStatus = ({ name, batteryPercent, BTStatus, marginTop = 0 }) => {
	return (
		<DeviceInfoContainer style={[styles.boxShadow, { marginTop }]}>
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
				<DeviceNameContainer>
					<Text style={{ fontSize: 22, fontWeight: 600 }}>{name}</Text>
					<DeviceStatusContainer>
						<Icon name="bluetooth-audio" size={18} color="black" />
						<Text style={{ fontSize: 16, marginLeft: 4 }}>
							{BTStatus}
						</Text>
					</DeviceStatusContainer>
				</DeviceNameContainer>
			</DeviceStatusImageContainer>

			<BatteryInfoContainer>
				<BatteryIcon />
				<Text style={{ fontSize: 16, marginLeft: 8 }}>
					{batteryPercent}%
				</Text>
			</BatteryInfoContainer>
		</DeviceInfoContainer>
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
	},
});

const DeviceInfoContainer = styled.View`
	width: ${percentageCalculation(350, 115)}px;
	height: ${responsiveHeight(9)}px;
	background-color: white;
	border-radius: 28%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
`;

const DeviceStatusImageContainer = styled.View`
	width: 60%;
	height: 100%;
	margin-left: 40px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const DeviceStatusImage = styled.Image`
	width: 55px;
	height: 55px;
`;

const DeviceNameContainer = styled.View`
	width: 45%;
	height: 60%;
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const DeviceStatusContainer = styled.View`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const BatteryInfoContainer = styled.View`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
