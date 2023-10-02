import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

// importing states and actions
import {
	selectTopDoctors,
	setSelectedDoctor,
	setTopDoctors,
} from "../slices/common-slice.js";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
} from "../services/dimensions";
import { capitalizeWord } from "../services/common";

const TopDoctors = ({ marginTop = 0 }) => {
	const dispatch = useDispatch();
	navigator = useNavigation();

	const topDoctors = useSelector(selectTopDoctors);

	useEffect(() => {
		getTopDoctors();
	}, []);

	const getTopDoctors = async () => {
		await axios
			.get("http://192.168.12.37:3000/api/doctor/getTopDoctors")
			.then((result) => {
				dispatch(setTopDoctors(result.data));
			})
			.catch((error) => {
				// handle the error
				console.log(error);
			});
	};

	return (
		<TopDoctorsContainer style={{ marginTop }}>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 700 }}>Top Doctors</Text>
			</TitleContainer>
			<DoctorsListContainer
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ padding: 5 }}
			>
				{topDoctors.length !== 0 &&
					topDoctors.map(
						({ id, firstName, lastName, doctorImage, profession }) => {
							const dataUri = `data:${doctorImage.contentType};base64,${doctorImage.data}`;
							return (
								<DoctorContainer
									style={styles.boxShadow}
									key={id}
									onPress={() => {
										dispatch(setSelectedDoctor(id));
										navigator.navigate("BookAppointmentScreen");
									}}
								>
									<DoctorImageContainer>
										<DoctorImage
											style={{ resizeMode: "cover" }}
											source={{ uri: dataUri }}
										/>
									</DoctorImageContainer>
									<DoctorDetails>
										<Text
											style={{
												fontSize: 17,
												fontWeight: 600,
												color: "#333",
											}}
										>
											Dr. {capitalizeWord(firstName)} {capitalizeWord(lastName)}
										</Text>
										<Text style={{ fontWeight: 600, color: "#555" }}>
											{profession}
										</Text>
									</DoctorDetails>
								</DoctorContainer>
							);
						}
					)}
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
