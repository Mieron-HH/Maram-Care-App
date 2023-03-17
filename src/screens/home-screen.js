import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

// importing components
import Header from "../components/header";

// importing styled components
import * as S from "../components/styled-components";

const HomeScreen = () => {
	const navigator = useNavigation();

	return (
		<S.OuterContainer>
			<Header />
		</S.OuterContainer>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
