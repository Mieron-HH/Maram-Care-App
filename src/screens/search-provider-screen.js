import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// importing navigations
import FirstLoad from "../navigations/SearchProvider/first-load";
import SecondLoad from "../navigations/SearchProvider/second-load";

// importing states
import {
	selectFirstLoadActive,
	selectSecondLoadActive,
} from "../slices/search-provider-slice";

// importing styled components
import * as S from "../components/styled-components";

const SearchProviderScreen = () => {
	const firstLoadActive = useSelector(selectFirstLoadActive);
	const secondLoadActive = useSelector(selectSecondLoadActive);

	return (
		<S.OuterContainer>
			{firstLoadActive && <FirstLoad />}
			{secondLoadActive && <SecondLoad />}
		</S.OuterContainer>
	);
};

export default SearchProviderScreen;

const styles = StyleSheet.create({});
