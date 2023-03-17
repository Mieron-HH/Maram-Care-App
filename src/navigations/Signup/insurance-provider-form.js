import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing styled components
import * as S from "../../components/styled-components";

// importing states and actions
import {
	selectCountrySelected,
	selectInsuranceProviderSelected,
	setInsuranceProviderForm,
	setInsuranceProviderSelected,
} from "../../slices/signup-slice";

const UAEInsuranceProviders = [
	"Daman",
	"Globemed",
	"Adnic",
	"Saico",
	"Thiqa Outside",
	"Iner Global",
];

const InsuranceProviderForm = () => {
	const dispatch = useDispatch();
	const navigator = useNavigation();

	const countrySelected = useSelector(selectCountrySelected);
	const insuranceProviderSelected = useSelector(
		selectInsuranceProviderSelected
	);
	const [insuranceProvidersList, setInsuranceProvidersList] = useState([]);
	const [canContinue, setCanContinue] = useState(false);

	useEffect(() => {
		dispatch(setInsuranceProviderSelected(""));
		setInsuranceProvidersList(UAEInsuranceProviders);
	}, []);

	const handleOnNextEvent = () => {
		if (insuranceProviderSelected !== "") {
			dispatch(setInsuranceProviderForm(false));
			navigator.replace("SearchProviderScreen");
		}
	};

	const returnToPreviousForm = (e) => {
		e.preventDefault();

		dispatch(setInsuranceProviderForm(false));
		dispatch(setStateFormActive(true));
	};

	return (
		<>
			<S.Container style={{ height: "85%" }}>
				<S.ReturnButtonContainer onPress={returnToPreviousForm}>
					<Icon name="chevron-left" size={35} color="white" />
				</S.ReturnButtonContainer>
				<S.FormContainer style={[S.styles.boxShadow, styles.formContainer]}>
					<S.GreetingsTitleContainer style={{ width: "60%" }}>
						<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
							Select your health insurance provider
						</S.GreetingsTitle>
					</S.GreetingsTitleContainer>
					<S.GreetingsSubtitle>
						This helps us find the best price for your telehealth visit.
						Please select your health insurance provider
					</S.GreetingsSubtitle>
					<S.TextInputContainer>
						<S.IconContainer disabled={true}>
							<Icon name="search" size={23} color="#b4b7b8" />
						</S.IconContainer>

						<S.SelectedDataText
							value={countrySelected
								.replace("(the)", "")
								.replace("*", "")}
							editable={false}
							placeholder="Select your insurance"
						/>

						<S.IconContainer
							onPress={() => {
								dispatch(setInsuranceProviderSelected(""));
								setCanContinue(false);
							}}>
							<Icon name="cancel" size={18} color="#6e2dfa" />
						</S.IconContainer>
					</S.TextInputContainer>
					<S.DataListContainer>
						{insuranceProvidersList.map((provider) => {
							return (
								<S.DataEntry
									key={provider}
									onPress={() => {
										dispatch(setInsuranceProviderSelected(provider));
										setCanContinue(true);
									}}>
									<S.DataEntryText>{provider}</S.DataEntryText>
									{insuranceProviderSelected === provider && (
										<S.IconContainer style={{ width: "8%" }}>
											<Icon
												name="check"
												size={23}
												color="purple"
												style={{ margin: -4, padding: -4 }}
											/>
											<Icon
												name="check"
												size={18}
												color="purple"
												style={{ margin: -4, padding: -4 }}
											/>
										</S.IconContainer>
									)}
								</S.DataEntry>
							);
						})}
					</S.DataListContainer>
				</S.FormContainer>
			</S.Container>
			<S.ContinueButtonContainer style={S.styles.reverseBoxShadow}>
				<S.ContinueButton
					disabled={!canContinue}
					style={{ marginTop: 0, opacity: canContinue ? 1 : 0.5 }}
					onPress={handleOnNextEvent}>
					<S.ContinueButtonText>Next</S.ContinueButtonText>
				</S.ContinueButton>
			</S.ContinueButtonContainer>
		</>
	);
};

export default InsuranceProviderForm;

const styles = StyleSheet.create({
	formContainer: {
		height: "87%",
	},
});
