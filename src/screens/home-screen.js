import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// importing components
import Header from "../components/header";
import DeviceStatus from "../components/device-status";
import Appointments from "../components/appointments";
import NavigationBar from "../components/navigation-bar";
import Category from "../components/category";

// importing styled components
import * as S from "../components/styled-components";

const HomeScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<Header />

			<DeviceStatus
				name="Tyto Care"
				batteryPercent={100}
				BTStatus="Connected"
				marginTop={25}
			/>

			<Appointments marginTop={25} />

			<Category marginTop={25} />

			<NavigationBar />
		</S.OuterContainer>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
