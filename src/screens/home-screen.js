import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";

// importing components
import Header from "../components/header";
import DeviceStatus from "../components/device-status";
import Appointments from "../components/appointments";
import NavigationBar from "../components/navigation-bar";
import Category from "../components/category";
import TopDoctors from "../components/top-doctors";

// importing styled components
import * as S from "../components/styled-components";
import { responsiveHeight } from "../services/dimensions";

const HomeScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<Header />

			<BodyContainer
				contentContainerStyle={{
					alignItems: "center",
					paddingBottom: "5%",
				}}
				showsVerticalScrollIndicator={false}>
				<DeviceStatus
					name="Tyto Care"
					batteryPercent={100}
					BTStatus="Connected"
					marginTop={25}
				/>

				<Appointments marginTop={25} />

				<Category marginTop={25} />

				<TopDoctors marginTop={25} />
			</BodyContainer>

			<NavigationBar />
		</S.OuterContainer>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});

const BodyContainer = styled.ScrollView`
	width: 100%;
	margin-bottom: ${responsiveHeight(8)}px;
`;
