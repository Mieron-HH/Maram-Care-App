import { StyleSheet } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { showMessage } from "react-native-flash-message";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import { setCurrentUser } from "../slices/common-slice";
import { setHomeNavigationBarActive } from "../slices/navigation-bar-slice";

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
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleOnLogin = async (e) => {
		e.preventDefault();

		await axios
			.post("http://192.168.12.37:3000/api/user/signin", {
				email: userEmail.toLowerCase().trim(),
				password: userPassword,
			})
			.then((result) => {
				dispatch(setCurrentUser(result.data));
				dispatch(setHomeNavigationBarActive(true));
				navigator.replace("HomeScreen");
			})
			.catch((error) => {
				showMessage({
					message: error.response.data.errors[0].message,
					description: "Login Error",
					type: "danger",
				});
			});
	};

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
							value={userEmail}
							onChangeText={(value) => setUserEmail(value)}
							placeholder="Email or username"
							placeholderTextColor="#8c5cfa"
						/>
					</TextInputContainer>

					<TextInputContainer>
						<StyledTextInput
							value={userPassword}
							onChangeText={(value) => setUserPassword(value)}
							placeholder="Password"
							secureTextEntry={!showPassword}
							placeholderTextColor="#8c5cfa"
						/>

						<RightIcon onPress={() => setShowPassword(!showPassword)}>
							{showPassword ? (
								<Icon name="visibility" size={22} color="gray" />
							) : (
								<Icon name="visibility-off" size={22} color="gray" />
							)}
						</RightIcon>
					</TextInputContainer>

					<ForgotPasswordContainer>
						<ForgotPassswordText>Forgot the password?</ForgotPassswordText>
					</ForgotPasswordContainer>

					<ButtonsContainer>
						<StyledButton
							style={{ backgroundColor: "#2dcad0" }}
							onPress={handleOnLogin}
						>
							<StyledButtonText style={{ color: "white" }}>
								Login
							</StyledButtonText>
						</StyledButton>

						<StyledButton
							style={{ borderColor: "#af93fc", borderWidth: 2 }}
							onPress={() => navigator.navigate("SignupScreen")}
						>
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
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const StyledTextInput = styled.TextInput`
	width: 90%;
	height: 100%;
	padding-left: 15px;
	font-size: 18px;
	font-weight: 500;
`;

const RightIcon = styled.TouchableOpacity`
	width: 10%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ForgotPasswordContainer = styled.TouchableOpacity`
	width: 100%;
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
