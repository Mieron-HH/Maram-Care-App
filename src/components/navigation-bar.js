import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectHomeNavbarActive,
	selectScheduleNavbarActive,
	selectDeviceNavbarActive,
	selectProfileNavbarActive,
	setHomeNavigationBarActive,
	setScheduleNavbarActive,
	setDeviceNavbarActive,
	setProfileNavbarActive,
} from "../slices/navigation-bar-slice.js";

// importing helper functions
import { responsiveHeight, responsiveWidth } from "../services/dimensions";

// importing sub-components
import CalendarIcon from "../sub-components/calendar-icon";

const NavigationBar = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const homeNavbarActive = useSelector(selectHomeNavbarActive);
	const scheduleNavbarActive = useSelector(selectScheduleNavbarActive);
	const deviceNavbarActive = useSelector(selectDeviceNavbarActive);
	const profileNavbarActive = useSelector(selectProfileNavbarActive);

	const handleNavbarPress = (nav_name) => {
		switch (nav_name) {
			case "home":
				dispatch(setHomeNavigationBarActive(true));
				break;
			case "schedule":
				dispatch(setScheduleNavbarActive(true));
				break;
			case "device":
				dispatch(setDeviceNavbarActive(true));
				break;
			case "profile":
				dispatch(setProfileNavbarActive(true));
				break;
		}
	};

	return (
		<NavigationBarContainer style={styles.boxShadow}>
			<NavigationBarIconContainer
				onPress={() => handleNavbarPress("home")}
				style={styles.MarginRight}>
				<Icon
					style={[
						styles.navigationIcon,
						{ color: homeNavbarActive ? "#66dae0" : "#cfd4d0" },
					]}
					name="house"
					size={35}
					color={homeNavbarActive ? "#66dae0" : "#cfd4d0"}
				/>
				<NavigationBarName
					style={{ color: homeNavbarActive ? "#66dae0" : "#cfd4d0" }}>
					Home
				</NavigationBarName>
			</NavigationBarIconContainer>
			<NavigationBarIconContainer
				onPress={() => handleNavbarPress("schedule")}
				style={[styles.MarginRight, styles.MarginLeft]}>
				<CalendarIcon
					color={scheduleNavbarActive ? "#66dae0" : "#cfd4d0"}
					size={25}
					marginTop={3}
				/>
				<NavigationBarName
					style={{ color: scheduleNavbarActive ? "#66dae0" : "#cfd4d0" }}>
					Schedule
				</NavigationBarName>
			</NavigationBarIconContainer>
			<NavigationBarIconContainer
				onPress={() => handleNavbarPress("device")}
				style={[styles.MarginRight, styles.MarginLeft]}>
				<Icon
					style={[
						styles.navigationIcon,
						{ color: deviceNavbarActive ? "#66dae0" : "#cfd4d0" },
					]}
					name="device-hub"
					size={35}
					color="#cfd4d0"
				/>
				<NavigationBarName
					style={{ color: deviceNavbarActive ? "#66dae0" : "#cfd4d0" }}>
					Device
				</NavigationBarName>
			</NavigationBarIconContainer>
			<NavigationBarIconContainer
				onPress={() => handleNavbarPress("profile")}
				style={styles.MarginLeft}>
				<UserImage
					style={{ resizeMode: "contain" }}
					source={require("../../assets/user_image.png")}
				/>
				<NavigationBarName
					style={{ color: profileNavbarActive ? "#66dae0" : "#cfd4d0" }}>
					Profile
				</NavigationBarName>
			</NavigationBarIconContainer>
		</NavigationBarContainer>
	);
};

export default NavigationBar;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	navigationIcon: {
		width: "50%",
		textAlign: "center",
	},
	MarginRight: {
		marginRight: 10,
	},
	MarginLeft: {
		marginLeft: 10,
	},
});

const NavigationBarContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(10)}px;
	padding-top: 3px;
	background-color: white;
	border-top-left-radius: 8%;
	border-top-right-radius: 8%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
	position: absolute;
	bottom: 0;
`;

const NavigationBarIconContainer = styled.TouchableOpacity`
	width: ${responsiveHeight(9.5)}px;
	height: 65%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const NavigationBarName = styled.Text`
	font-size: 16px;
	font-weight: 700;
	color: #939694;
`;

const UserImage = styled.Image`
	width: 35px;
	height: 35px;
`;
