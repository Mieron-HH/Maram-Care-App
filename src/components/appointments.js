import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
	responsiveWidth,
} from "../services/dimensions";

const Appointments = ({ marginTop = 0 }) => {
	return (
		<AppointmentsContainer style={{ marginTop }}>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 700 }}>Appointments</Text>
			</TitleContainer>
			<AppointmentContainer style={styles.boxShadow}>
				<Appointment>
					<DoctorInfoContainer>
						<DoctorImageContainer style={styles.imageBoxShadow}>
							<DoctorImage
								style={{ resizeMode: "contain" }}
								source={require("../../assets/doctor_1.png")}
							/>
						</DoctorImageContainer>
						<DoctorDetailsContainer>
							<Text style={{ fontSize: 25, fontWeight: 600 }}>
								Dr. Fatna Mohamed
							</Text>
							<Text style={{ fontSize: 18, fontWeight: 600 }}>
								General Dentist
							</Text>
						</DoctorDetailsContainer>
					</DoctorInfoContainer>
					<ScheduleDateContainer>
						<Text
							style={{ fontSize: 18, fontWeight: 600, color: "white" }}>
							Thursday 26 Jan 5:00 PM
						</Text>
					</ScheduleDateContainer>
				</Appointment>
				<AppointmentButton>
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
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.1,
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

const AppointmentContainer = styled.TouchableOpacity`
	width: 100%;
	height: 75%;
	background-color: white;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
`;

const Appointment = styled.View`
	width: 85%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const DoctorInfoContainer = styled.View`
	width: 100%;
	height: 40%;
	padding-left: 8%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const DoctorImageContainer = styled.View`
	width: 18%;
	height: 100%;
`;

const DoctorImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const DoctorDetailsContainer = styled.View`
	width: 82%;
	height: 100%;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

const ScheduleDateContainer = styled.View`
	width: ${responsiveHeight(27)}px;
	height: 28%;
	margin-left: 25%;
	padding-left: 20px;
	background-color: #815ef6;
	border-radius: 50%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const AppointmentButton = styled.View`
	width: 15%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
