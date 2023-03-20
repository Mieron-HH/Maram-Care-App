import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
} from "../services/dimensions";

const TopDoctors = ({ marginTop = 0 }) => {
	navigator = useNavigation();

	return (
		<TopDoctorsContainer style={{ marginTop }}>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 700 }}>Top Doctors</Text>
			</TitleContainer>
			<DoctorsListContainer
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ padding: 5 }}>
				<DoctorContainer
					style={styles.boxShadow}
					onPress={() => navigator.navigate("AppointmentScreen")}>
					<DoctorImageContainer>
						<DoctorImage
							style={{ resizeMode: "cover" }}
							source={require("../../assets/doctor_2.jpeg")}
						/>
					</DoctorImageContainer>
					<DoctorDetails>
						<Text
							style={{ fontSize: 17, fontWeight: 600, color: "#333" }}>
							Dr. Ahmed Khaled
						</Text>
						<Text style={{ fontWeight: 600, color: "#555" }}>
							General Dentist
						</Text>
					</DoctorDetails>
				</DoctorContainer>
				<DoctorContainer style={styles.boxShadow}>
					<DoctorImageContainer>
						<DoctorImage
							style={{ resizeMode: "cover" }}
							source={require("../../assets/doctor_3.jpeg")}
						/>
					</DoctorImageContainer>
					<DoctorDetails>
						<Text
							style={{ fontSize: 17, fontWeight: 600, color: "#333" }}>
							Dr. Britney Smith
						</Text>
						<Text style={{ fontWeight: 600, color: "#555" }}>
							Cardiologist
						</Text>
					</DoctorDetails>
				</DoctorContainer>
				<DoctorContainer style={styles.boxShadow}>
					<DoctorImageContainer>
						<DoctorImage
							style={{ resizeMode: "cover" }}
							source={require("../../assets/doctor_4.jpeg")}
						/>
					</DoctorImageContainer>
					<DoctorDetails>
						<Text
							style={{ fontSize: 17, fontWeight: 600, color: "#333" }}>
							Dr. James Anderson
						</Text>
						<Text style={{ fontWeight: 600, color: "#555" }}>
							Neurologists
						</Text>
					</DoctorDetails>
				</DoctorContainer>
			</DoctorsListContainer>
		</TopDoctorsContainer>
	);
};

export default TopDoctors;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	doctorImage: {
		width: "100%",
		height: "100%",
	},
});

const TopDoctorsContainer = styled.View`
	width: ${percentageCalculation(350, 115)}px;
	height: ${responsiveHeight(30)}px;
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

const DoctorsListContainer = styled.ScrollView`
	width: 100%;
	height: 75%;
`;

const DoctorContainer = styled.TouchableOpacity`
	width: ${responsiveHeight(20)}px;
	height: 100%;
	margin-right: 20px;
	background-color: white;
	border-radius: 8%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const DoctorImageContainer = styled.View`
	width: 100%;
	height: 78%;
	border-top-left-radius: 8%;
	border-top-right-radius: 8%;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const DoctorImage = styled.Image`
	width: 100%;
	height: 100%;
`;

const DoctorDetails = styled.View`
	width: 100%;
	height: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
