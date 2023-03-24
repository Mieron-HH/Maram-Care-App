import { StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing components
import NavigationBar from "../components/navigation-bar";
import AppointmentsList from "../components/appointments-list";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";

const AppointmentScreen = () => {
	const [userAppointments, setUserAppointments] = useState([]);

	useEffect(() => {
		getUserAppointments();
	}, []);

	const getUserAppointments = async () => {
		await axios
			.get("http://192.168.100.167:3000/api/appointment/getUserAppointments")
			.then((result) => {
				setUserAppointments(result.data);
			})
			.catch((error) => console.log(error));
	};

	return (
		<S.OuterContainer>
			<HeaderContainer style={styles.boxShadow}>
				<ReturnButtonContainer>
					<Text style={styles.screenTitle}>Appointments</Text>
				</ReturnButtonContainer>
			</HeaderContainer>

			<S.Container>
				{userAppointments.length !== 0 ? (
					<AppointmentsListContainer>
						{userAppointments.map((appointment) => {
							return (
								<AppointmentsList
									key={appointment.id}
									appointment={appointment}
									getUserAppointments={getUserAppointments}
								/>
							);
						})}
					</AppointmentsListContainer>
				) : (
					<NoAppointmentContainer>
						<CategoriesContainer style={styles.boxShadow}>
							<Category>
								<CategoryIconContainer
									style={{ backgroundColor: "#e3dcff" }}>
									<Icon name="schedule" size={30} color="#8068e9" />
								</CategoryIconContainer>
								<CategoryText style={{ color: "#8068e9" }}>
									Abdomen
								</CategoryText>
								<Icon name="circle" size={6} color="#8068e9" />
							</Category>
							<Category>
								<CategoryIconContainer
									style={{ backgroundColor: "#e3dcff" }}>
									<Icon name="check-box" size={30} color="blue" />
								</CategoryIconContainer>
								<CategoryText style={{ color: "#888" }}>
									Skin
								</CategoryText>
							</Category>
							<Category>
								<CategoryIconContainer
									style={{ backgroundColor: "#c9f8ff" }}>
									<Icon name="check-box" size={30} color="#33d4e6" />
								</CategoryIconContainer>
								<CategoryText style={{ color: "#888" }}>
									Dentist
								</CategoryText>
							</Category>
						</CategoriesContainer>

						<NoAppointmentTextContainer>
							<Text
								style={{
									fontSize: 23,
									fontWeight: 600,
									color: "#555",
									width: "40%",
									textAlign: "center",
								}}>
								You do not have an appointment!
							</Text>

							<Text
								style={{
									fontSize: 19,
									fontWeight: 600,
									color: "#999",
									width: "70%",
									textAlign: "center",
								}}>
								Book a health care service right away for you and your
								family!
							</Text>
						</NoAppointmentTextContainer>

						<S.ContinueButton>
							<S.ContinueButtonText>
								Make an appointment
							</S.ContinueButtonText>
						</S.ContinueButton>
					</NoAppointmentContainer>
				)}
			</S.Container>
			<NavigationBar />
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
	screenTitle: {
		width: "30%",
		fontSize: 22,
		fontWeight: 600,
		textAlign: "center",
		position: "absolute",
		left: "35%",
	},
});

const HeaderContainer = styled.View`
	width: 100%;
	height: 18%;
	background-color: white;
	border-bottom-left-radius: 20%;
	border-bottom-right-radius: 20%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
`;

const ReturnButtonContainer = styled.View`
	width: 98%;
	height: ${responsiveHeight(5)}px;
	margin-top: ${responsiveHeight(2)}px;
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	position: relative;
`;

const AppointmentsListContainer = styled.ScrollView`
	width: 100%;
	padding: 5px;
	margin-top: ${responsiveHeight(14)}px;
`;

const NoAppointmentContainer = styled.View`
	width: 100%;
	height: 73%;
	margin-top: ${responsiveHeight(10)}px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const CategoriesContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(14)}px;
	background-color: white;
	border-radius: 15%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

const Category = styled.TouchableOpacity`
	width: 20%;
	height: 75%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const CategoryIconContainer = styled.View`
	width: 65%;
	height: 50%;
	border-radius: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CategoryText = styled.Text`
	margin-top: 17%;
	margin-bottom: 5px;
	font-size: 18px;
	font-weight: 500;
`;

const NoAppointmentTextContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(20)}px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;
