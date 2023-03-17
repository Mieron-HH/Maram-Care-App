import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// importing states and actions
import {
	setFirstLoadActive,
	setSecondLoadActive,
} from "../../slices/search-provider-slice";

// importing components
import CompanyLogo from "../../components/company-logo";

// importing styled components
import * as S from "../../components/styled-components";

// importing helper functions
import { responsiveHeight } from "../../services/dimensions";

const LoadingColor = [
	"#cdb9fd",
	"#b2abdb",
	"#b1ffff",
	"#7135f7",
	"#3c249b",
	"#88e3e6",
];

const FirstLoad = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(setFirstLoadActive(false));
			dispatch(setSecondLoadActive(true));
		}, 3000);
	}, []);
	return (
		<S.Container>
			<S.GreetingsTitleContainer style={{ width: "50%", marginTop: "15%" }}>
				<S.GreetingsTitle style={{ color: "#6e2dfa" }}>
					Searching for your MamaCare Provider
				</S.GreetingsTitle>
			</S.GreetingsTitleContainer>

			<LoadingIndicatorsContainer>
				{LoadingColor.map((colorHex) => {
					return (
						<LoadingIndicator
							key={colorHex}
							style={{ backgroundColor: colorHex }}
						/>
					);
				})}
			</LoadingIndicatorsContainer>

			<CompanyLogo useBoxShadow={false} />
		</S.Container>
	);
};

export default FirstLoad;

const LoadingIndicatorsContainer = styled.View`
	width: 22%;
	height: 10px;
	margin-top: ${responsiveHeight(5)}px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const LoadingIndicator = styled.View`
	width: 10px;
	height: 10px;
	border-radius: 100%;
`;
