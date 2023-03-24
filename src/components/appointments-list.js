import { StyleSheet, Text } from "react-native";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { showMessage } from "react-native-flash-message";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const AppointmentsList = ({ appointment, getUserAppointments }) => {
	const cancelAppointment = async (appointmentID) => {
		await axios
			.post(
				"http://192.168.100.167:3000/api/appointment/cancelAppointment",
				{ appointmentID }
			)
			.then((result) => {
				getUserAppointments();
				showMessage({
					message: "Successfully cancelled an appointment",
					description: "Appointment",
					type: "success",
				});
			})
			.catch((error) => {
				console.log(error);
				showMessage({
					message: "Something went wrong. Please try again.",
					description: "Appointment",
					type: "danger",
				});
			});
	};

	return (
		<AppointmentContainer key={appointment.id} style={styles.boxShadow}>
			<DoctorImageContainer>
				<DoctorImage
					style={{ resizeMode: "cover" }}
					source={{
						uri: `data:${appointment.doctor.doctorImage.contentType};base64,${appointment.doctor.doctorImage.data}`,
					}}
				/>
			</DoctorImageContainer>

			<AppointmentDetailsContain>
				<DoctorDetailsContainer>
					<Text
						style={{
							fontSize: 18,
							fontWeight: 500,
							color: "#333",
						}}>
						Dr. {capitalizeWord(appointment.doctor.firstName)}{" "}
						{capitalizeWord(appointment.doctor.lastName)}
					</Text>
					<Text
						style={{
							fontSize: 15,
							fontWeight: 500,
							color: "#777",
						}}>
						{appointment.doctor.profession}
					</Text>
				</DoctorDetailsContainer>

				<AppointmentDateContainer>
					<AppointmentDateText>
						{new window.Date(appointment.date).toDateString()}{" "}
						{appointment.time}
					</AppointmentDateText>
				</AppointmentDateContainer>
			</AppointmentDetailsContain>

			<CancelButtonContainer
				onPress={() => cancelAppointment(appointment.id)}>
				<Icon name="cancel" size={20} color="red" />
			</CancelButtonContainer>
		</AppointmentContainer>
	);
};

export default AppointmentsList;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const AppointmentContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(7)}px;
	margin-bottom: 30px;
	padding: 2px;
	background-color: white;
	border-radius: 10%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const DoctorImageContainer = styled.View`
	width: 60px;
	height: 60px;
	border-radius: 10%;
	overflow: hidden;
`;

const DoctorImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const AppointmentDetailsContain = styled.View`
	width: 70%;
	height: 100%;
	margin-left: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const DoctorDetailsContainer = styled.View`
	width: 100%;
	height: 55%;
	padding-left: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const AppointmentDateContainer = styled.View`
	width: 85%;
	height: 40%;
	background-color: #7234f8;
	border-radius: 5%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const AppointmentDateText = styled.Text`
	font-size: 17px;
	font-weight: 600;
	color: white;
`;

const CancelButtonContainer = styled.TouchableOpacity`
	width: 12%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
