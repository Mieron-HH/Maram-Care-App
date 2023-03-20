import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing styled components
import * as S from "../components/styled-components";
import {
	percentageCalculation,
	responsiveHeight,
} from "../services/dimensions";

// importing components
import DoctorExperience from "../components/doctor-experience";
import DatesComponent from "../components/dates-component";
import TimeComponent from "../components/time-component";

const AppointmentScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<ReturnButtonContainer onPress={() => navigator.goBack()}>
				<Icon name="chevron-left" size={40} color="black" />
			</ReturnButtonContainer>
			<DoctorInfoContainer>
				<DoctorImageContainer>
					<DoctorImageBackground>
						<DoctorImageBackgroundInner />
					</DoctorImageBackground>
					<DoctorImage
						style={{ resizeMode: "contain" }}
						source={require("../../assets/doctor_2_bg_removed.png")}
					/>
				</DoctorImageContainer>
				<DoctorDetails>
					<Text style={{ fontSize: 20, fontWeight: 700 }}>
						Dr. Ahmed Khaled
					</Text>
					<Text style={{ fontSize: 16, fontWeight: 500 }}>
						General Dentist
					</Text>
				</DoctorDetails>
			</DoctorInfoContainer>

			<BodyContainer style={styles.boxShadow}>
				<DoctorExperience years={5} patients={500} />

				<ScheduleContainer>
					<AboutDoctorContainer>
						<Text
							style={{ fontSize: 18, fontWeight: 600, color: "#333" }}>
							About Doctor
						</Text>
						<AboutDoctorText>
							Hello. My name is Ahmed Khaled, and I am a general dentist
							at LLH international hospital. If you have any health
							problem, then please contact me.
						</AboutDoctorText>
					</AboutDoctorContainer>

					<AppointmentContainer>
						<DatesComponent />
						<TimeComponent />
					</AppointmentContainer>

					<S.ContinueButton
						onPress={() => navigator.navigate("PaymentPlanScreen")}>
						<S.ContinueButtonText>Book Appointment</S.ContinueButtonText>
					</S.ContinueButton>
				</ScheduleContainer>
			</BodyContainer>
		</S.OuterContainer>
	);
};

export default AppointmentScreen;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const ReturnButtonContainer = styled.TouchableOpacity`
	width: 97%;
	height: 40px;
`;

const DoctorInfoContainer = styled.View`
	width: 100%;
	height: 22%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const DoctorImageContainer = styled.View`
	width: ${responsiveHeight(20)}px;
	height: 75%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

const DoctorImageBackground = styled.View`
	width: ${responsiveHeight(13)}px;
	height: ${responsiveHeight(13)}px;
	background-color: #c5aeff;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 0;
`;

const DoctorImageBackgroundInner = styled.View`
	width: 80%;
	height: 80%;
	background-color: #7234f8;
	border-radius: 100%;
`;

const DoctorImage = styled.Image`
	width: 90%;
	height: 90%;
`;

const DoctorDetails = styled.View`
	width: 100%;
	height: 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BodyContainer = styled.View`
	width: ${percentageCalculation(350, 122.5)}px;
	height: 74%;
	background-color: #7234f8;
	border-top-left-radius: 30%;
	border-top-right-radius: 30%;
	display: flex;
	flex-direction: column;
`;

const ScheduleContainer = styled.View`
	width: 100%;
	height: 87%;
	padding: 4%;
	background-color: white;
	border-top-left-radius: 30%;
	border-top-right-radius: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AboutDoctorContainer = styled.View`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;

const AboutDoctorText = styled.Text`
	width: 90%;
	height: 70%;
	font-size: 17px;
	color: #777;
	font-weight: 500;
	text-align: left;
`;

const AppointmentContainer = styled.View`
	width: 100%;
	height: 45%;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
