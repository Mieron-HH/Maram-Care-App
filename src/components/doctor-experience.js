import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

const DoctorExperience = ({ years, patients }) => {
	return (
		<DoctorExperienceContainer>
			<PatientsCount>
				<FamilyImage
					style={{ resizeMode: "contain" }}
					source={require("../../assets/family_image.png")}
				/>
				<PatientsCountNumber>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 700,
							color: "white",
						}}>
						{patients}+
					</Text>
					<Text
						style={{
							fontSize: 16.5,
							fontWeight: 400,
							color: "white",
						}}>
						Patients
					</Text>
				</PatientsCountNumber>
			</PatientsCount>
			<YearsExperience>
				<ExperienceBadgeImageContainer>
					<ExperienceBadgeImage
						style={{ resizeMode: "contain" }}
						source={require("../../assets/experience_badge.png")}
					/>
				</ExperienceBadgeImageContainer>
				<YearsExperienceNumber>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 700,
							color: "white",
						}}>
						{years} Years
					</Text>
					<Text
						style={{
							fontSize: 16.5,
							fontWeight: 400,
							color: "white",
						}}>
						Experience
					</Text>
				</YearsExperienceNumber>
			</YearsExperience>
		</DoctorExperienceContainer>
	);
};

export default DoctorExperience;

const styles = StyleSheet.create({});

const DoctorExperienceContainer = styled.View`
	width: 100%;
	height: 13%;
	padding: 3%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const PatientsCount = styled.View`
	width: 50%;
	height: 100%;
	padding-left: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const FamilyImage = styled.Image`
	width: 50px;
	height: 100%;
`;

const PatientsCountNumber = styled.View`
	width: 70%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const YearsExperience = styled.View`
	width: 50%;
	height: 100%;
	padding-right: 5px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const ExperienceBadgeImageContainer = styled.View`
	width: 50px;
	height: 50px;
	background-color: white;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ExperienceBadgeImage = styled.Image`
	width: 100%;
	height: 100%; ;
`;

const YearsExperienceNumber = styled.View`
	width: 45%;
	height: 100%;
	padding-left: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
