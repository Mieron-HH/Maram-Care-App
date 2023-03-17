import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

// importing helper functions
import { responsiveHeight } from "../services/dimensions";

// importing styled components
import { styles } from "./styled-components";

const CompanyLogo = ({ useBoxShadow }) => {
	return (
		<LogoContainer style={useBoxShadow && styles.boxShadow}>
			<LogoImage
				style={{ resizeMode: "contain" }}
				source={require("../../assets/Maram_Logo.png")}
			/>
			<CompanyNameContainer>
				<StyledText style={{ fontSize: 25, marginRight: 1 }}>
					Maram
				</StyledText>
				<StyledText
					style={{
						color: "#2d0f91",
						fontSize: 25,
						fontWeight: "bold",
						marginLeft: 1,
					}}>
					Care
				</StyledText>
			</CompanyNameContainer>
			<StyledText>Remote Physical Exams</StyledText>
		</LogoContainer>
	);
};

export default CompanyLogo;

const LogoContainer = styled.View`
	width: 190px;
	height: 160px;
	border-radius: 40%;
	margin-top: ${responsiveHeight(11)}px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LogoImage = styled.Image`
	width: 80%;
	height: 50%;
`;

const CompanyNameContainer = styled.View`
	width: 100%;
	height: 15%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const StyledText = styled.Text`
	color: #9669fa;
`;
