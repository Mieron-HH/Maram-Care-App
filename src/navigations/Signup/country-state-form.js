import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectCountrySelected,
	selectStateSelected,
	setCountryFormActive,
	setInsuranceProviderForm,
	setStateFormActive,
	setStateSelected,
} from "../../slices/signup-slice.js";

// importing styled components
import * as S from "../../components/styled-components";

const UAEProvinces = [
	"Abu Dhabi",
	"Dubai",
	"Al Ain",
	"Sharjah",
	"Ras Al Khaimah",
];

const StateForm = () => {
	const dispatch = useDispatch();

	const countrySelected = useSelector(selectCountrySelected);
	const stateSelected = useSelector(selectStateSelected);
	const [statesList, setStatesList] = useState([]);
	const [canContinue, setCanContinue] = useState(false);

	useEffect(() => {
		setStatesList(UAEProvinces);
		dispatch(setStateSelected(""));
	}, []);

	const handleOnNextEvent = () => {
		if (stateSelected !== "") {
			dispatch(setStateFormActive(false));
			dispatch(setInsuranceProviderForm(true));
		}
	};

	const returnToPreviousForm = (e) => {
		e.preventDefault();

		dispatch(setStateFormActive(false));
		dispatch(setCountryFormActive(true));
	};

	return (
		<>
			<S.Container style={{ height: "85%" }}>
				<S.ReturnButtonContainer onPress={returnToPreviousForm}>
					<Icon name="chevron-left" size={35} color="white" />
				</S.ReturnButtonContainer>
				<S.FormContainer style={[S.styles.boxShadow, styles.formContainer]}>
					<S.GreetingsTitleContainer>
						<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
							Which state do you live in?
						</S.GreetingsTitle>
					</S.GreetingsTitleContainer>
					<S.GreetingsSubtitle>
						This helps us find a MaramCare device nearby you
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
							placeholder="Select your state"
						/>

						<S.IconContainer
							onPress={() => {
								dispatch(setStateSelected(""));
								setCanContinue(false);
							}}>
							<Icon name="cancel" size={18} color="#6e2dfa" />
						</S.IconContainer>
					</S.TextInputContainer>
					<S.DataListContainer>
						{statesList.map((province) => {
							return (
								<S.DataEntry
									key={province}
									onPress={() => {
										dispatch(setStateSelected(province));
										setCanContinue(true);
									}}>
									<S.DataEntryText>{province}</S.DataEntryText>

									{stateSelected === province && (
										<Icon name="check" size={23} color="purple" />
									)}
								</S.DataEntry>
							);
						})}
					</S.DataListContainer>
				</S.FormContainer>
			</S.Container>
			<S.ContinueButtonContainer style={styles.reverseBoxShadow}>
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

export default StateForm;

const styles = StyleSheet.create({
	formContainer: {
		height: "78%",
	},
});
