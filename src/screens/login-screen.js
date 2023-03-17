import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

// importing components
import CompanyLogo from "../components/company-logo";

// importing styled components
import * as S from "../components/styled-components";

// importing helper functions
import {
	percentageCalculation,
	responsiveHeight,
} from "../services/dimensions";

const LoginScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<LinearGradient
				style={styles.LinearGradientStyle}
				colors={["#9669fa", "#8250fa", "#783cfa", "#6473e6", "#5f7ce6"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
			/>
			<S.Container>
				<CompanyLogo useBoxShadow={true} />

				<FormContainer>
					<TextInputContainer>
						<StyledTextInput
							placeholder="Email or username"
							placeholderTextColor="#8c5cfa"
						/>
					</TextInputContainer>

					<TextInputContainer>
						<StyledTextInput
							placeholder="Password"
							placeholderTextColor="#8c5cfa"
						/>
					</TextInputContainer>

					<ForgotPasswordContainer>
						<ForgotPassswordText>
							Forgot the password?
						</ForgotPassswordText>
					</ForgotPasswordContainer>

					<ButtonsContainer>
						<StyledButton style={{ backgroundColor: "#2dcad0" }}>
							<StyledButtonText style={{ color: "white" }}>
								Login
							</StyledButtonText>
						</StyledButton>

						<StyledButton
							style={{ borderColor: "#af93fc", borderWidth: 2 }}
							onPress={() => navigator.navigate("SignupScreen")}>
							<StyledButtonText style={{ color: "#af93fc" }}>
								Sign Up
							</StyledButtonText>
						</StyledButton>
					</ButtonsContainer>
				</FormContainer>
			</S.Container>
		</S.OuterContainer>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	LinearGradientStyle: {
		width: "100%",
		height: "26%",
		borderBottomLeftRadius: "100%",
		borderBottomRightRadius: "100%",
		position: "absolute",
		top: 0,
	},
});

const Container = styled.View`
	width: 100%;
	height: 100%;
	padding-top: ${responsiveHeight(5)}px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

const FormContainer = styled.View`
	width: ${percentageCalculation(350, 100)}px;
	height: 40%;
	margin-top: ${responsiveHeight(10)}px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const TextInputContainer = styled.View`
	width: 95%;
	height: 50px;
	margin-bottom: 20px;
	background-color: #f7f7f7;
	border-radius: 10%;
`;

const StyledTextInput = styled.TextInput`
	width: 100%;
	height: 100%;
	padding-left: 15px;
	font-size: 18px;
	font-weight: 500;
`;

const ForgotPasswordContainer = styled.TouchableOpacity`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const ForgotPassswordText = styled.Text`
	font-size: 18px;
	font-weight: 600;
	color: #8c5cfa;
`;

const ButtonsContainer = styled.View`
	width: 100%;
	height: ${responsiveHeight(13)}px;
	margin-top: ${responsiveHeight(5)}px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const StyledButton = styled.TouchableOpacity`
	width: 100%;
	height: ${responsiveHeight(5.5)}px;
	border-radius: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledButtonText = styled.Text`
	font-size: 23px;
	font-weight: 600;
`;
