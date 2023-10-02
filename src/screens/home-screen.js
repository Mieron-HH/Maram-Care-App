import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styled from "styled-components";
import { showMessage } from "react-native-flash-message";

// importing states and actions
import {
	selectUserDataFetched,
	setCurrentUser,
	setUserDataFetched,
} from "../slices/common-slice";

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
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const userDataFetched = useSelector(selectUserDataFetched);

	useEffect(() => {
		console.log;
		if (!userDataFetched) authUser();
	}, []);

	const authUser = async () => {
		await axios
			.get("http://192.168.12.37:3000/api/user/currentUser")
			.then((result) => {
				if (result.data.currentUser === null) navigator.replace("LoginScreen");
				else getUserInfo();
			})
			.catch((error) => {
				console.log(error);
				navigator.replace("LoginScreen");
			});
	};

	const getUserInfo = async () => {
		await axios
			.get("http://192.168.12.37:3000/api/user/getInfo")
			.then((result) => {
				dispatch(setCurrentUser(result.data));
				dispatch(setUserDataFetched(true));
			})
			.catch((error) => {
				showMessage({
					message: error.response.data.errors[0].message,
					description: "Authentication Error",
					type: "danger",
				});
				navigator.replace("LoginScreen");
			});
	};

	return userDataFetched ? (
		<S.OuterContainer>
			<Header />

			<BodyContainer
				contentContainerStyle={{
					alignItems: "center",
					paddingBottom: "5%",
				}}
				showsVerticalScrollIndicator={false}
			>
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
	) : (
		<></>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});

const BodyContainer = styled.ScrollView`
	width: 100%;
	margin-bottom: ${responsiveHeight(8)}px;
`;
