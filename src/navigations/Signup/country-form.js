import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialIcons";

// importing states and actions
import {
	selectCountrySelected,
	setCountryFormActive,
	setPhoneNumberFormActive,
	setCountrySelected,
	setStateFormActive,
} from "../../slices/signup-slice.js";

// importing styled components
import * as S from "../../components/styled-components";

const CountryForm = () => {
	const dispatch = useDispatch();

	const countrySelected = useSelector(selectCountrySelected);
	const [countries, setCountries] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [canContinue, setCanContinue] = useState(false);

	useEffect(() => {
		getCountriesList();
		dispatch(setCountrySelected(""));
	}, []);

	const getCountriesList = (search = "") => {
		const url = `https://api.first.org/data/v1/countries?q=${search}`;

		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				// setCountries(json.data.map(({ country }) => country));
				const result = json.data;
				let countriesList = [];
				for (const key in result) {
					countriesList.push(result[key]["country"]);
				}
				countriesList.sort();
				setCountries(countriesList);
			})
			.catch((err) => console.error("error:" + err));
	};

	const handleOnNextEvent = () => {
		if (searchQuery === countrySelected) {
			dispatch(setCountryFormActive(false));
			dispatch(setStateFormActive(true));
		}
	};

	const returnToPreviousForm = (e) => {
		e.preventDefault();

		dispatch(setCountryFormActive(false));
		dispatch(setPhoneNumberFormActive(true));
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
							Which country do you live in?
						</S.GreetingsTitle>
					</S.GreetingsTitleContainer>
					<S.GreetingsSubtitle>
						This helps us find a MaramCare device nearby you.
					</S.GreetingsSubtitle>
					<S.TextInputContainer>
						<S.IconContainer disabled={true}>
							<Icon name="search" size={23} color="#b4b7b8" />
						</S.IconContainer>

						<S.SelectedDataText
							value={searchQuery.replace("(the)", "").replace("*", "")}
							onChangeText={(search) => {
								setSearchQuery(search);
								dispatch(setCountrySelected(""));
								getCountriesList(search);
								setCanContinue(false);
							}}
							placeholder="Select your country"
						/>

						<S.IconContainer
							onPress={() => {
								setSearchQuery("");
								dispatch(setCountrySelected(""));
								getCountriesList();
								setCanContinue(false);
							}}>
							<Icon name="cancel" size={18} color="#6e2dfa" />
						</S.IconContainer>
					</S.TextInputContainer>
					<S.DataListContainer>
						{countries.length !== 0 &&
							countries.map((country) => {
								return (
									<S.DataEntry
										key={country}
										onPress={() => {
											setSearchQuery(country);
											dispatch(setCountrySelected(country));
											setCanContinue(true);
										}}>
										<S.DataEntryText>{country}</S.DataEntryText>
										{countrySelected === country && (
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

export default CountryForm;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	reverseBoxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: -2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
	},
	formContainer: {
		height: "90%",
		borderRadius: 0,
		borderTopLeftRadius: "20%",
		borderTopRightRadius: "20%",
	},
});
