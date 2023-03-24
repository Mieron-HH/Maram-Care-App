import { StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import { setScheduleNavbarActive } from "../slices/navigation-bar-slice.js";

// importing helper functions
import {
	responsiveHeight,
	percentageCalculation,
} from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const Appointments = ({ marginTop = 0 }) => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const [nearestAppointment, setNearestAppointment] = useState([]);

	useEffect(() => {
		getUserAppointments();
	}, []);

	const getUserAppointments = () => {
		axios
			.get("http://192.168.100.167:3000/api/appointment/getUserAppointments")
			.then((result) => {
				setNearestAppointment(result.data);
			})
			.catch((error) => console.log(error));
	};

	return (
		<AppointmentsContainer style={{ marginTop }}>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 700 }}>Appointments</Text>
			</TitleContainer>
			<AppointmentContainer style={styles.boxShadow}>
				{nearestAppointment.length !== 0 ? (
					<Appointment>
						<DoctorImageContainer>
							<DoctorImage
								style={{ resizeMode: "cover", borderRadius: 50 }}
								source={{
									uri: `data:${nearestAppointment[0].doctor.doctorImage.contentType};base64,${nearestAppointment[0].doctor.doctorImage.data}`,
								}}
							/>
						</DoctorImageContainer>
						<AppointmentInfoContainer>
							<DoctorDetailsContainer>
								<Text
									style={{
										fontSize: 23,
										fontWeight: 600,
										color: "#333",
									}}>
									Dr.{" "}
									{capitalizeWord(
										nearestAppointment[0].doctor.firstName
									)}{" "}
									{capitalizeWord(
										nearestAppointment[0].doctor.lastName
									)}
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: 600,
										color: "#555",
									}}>
									{nearestAppointment[0].doctor.profession}
								</Text>
							</DoctorDetailsContainer>
							<ScheduleDateContainer>
								<Text
									style={{
										fontSize: 19,
										fontWeight: 600,
										color: "white",
									}}>
									{new window.Date(
										nearestAppointment[0].date
									).toDateString()}{" "}
									{nearestAppointment[0].time}
								</Text>
							</ScheduleDateContainer>
						</AppointmentInfoContainer>
					</Appointment>
				) : (
					<NoAppointmentContainer>
						<NoAppointmentText>
							No upcoming appointments
						</NoAppointmentText>
					</NoAppointmentContainer>
				)}
				<AppointmentButton
					onPress={() => {
						dispatch(setScheduleNavbarActive(true));
						navigator.replace("AppointmentScreen");
					}}>
					<Icon name="chevron-right" size={35} color="#3b31a4" />
				</AppointmentButton>
			</AppointmentContainer>
		</AppointmentsContainer>
	);
};

export default Appointments;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	imageBoxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const AppointmentsContainer = styled.View`
	width: ${percentageCalculation(350, 115)}px;
	height: ${responsiveHeight(18)}px;
	padding-bottom: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const TitleContainer = styled.View`
	width: 100%;
	height: 15%;
	padding-left: 10px;
	text-align: left;
`;

const AppointmentContainer = styled.View`
	width: 100%;
	height: 75%;
	background-color: white;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const Appointment = styled.View`
	width: 85%;
	height: 100%;
	padding-left: 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const NoAppointmentContainer = styled.View`
	width: 85%;
	height: 100%;
	background-color: rgba(1, 1, 1, 0.08);
	border-top-left-radius: 50%;
	border-bottom-left-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NoAppointmentText = styled.Text`
	font-size: 22px;
	font-weight: 500;
	color: #333;
`;

const DoctorImageContainer = styled.View`
	width: ${responsiveHeight(8)}px;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const DoctorImage = styled.Image`
	width: 50px;
	height: 50px;
`;

const AppointmentInfoContainer = styled.View`
	width: 70%;
	height: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const DoctorDetailsContainer = styled.View`
	width: 82%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const ScheduleDateContainer = styled.View`
	width: ${responsiveHeight(27)}px;
	height: 32%;
	margin-top: 3px;
	padding-left: 20px;
	background-color: #7234f8;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const AppointmentButton = styled.TouchableOpacity`
	width: 15%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
