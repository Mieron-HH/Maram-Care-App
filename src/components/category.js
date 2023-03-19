import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// importing states and actions
import {
	selectDentistCategoryActive,
	selectPhysicalCategoryActive,
	selectStomachCategoryActive,
	selectMindCategoryActive,
	setDentistCategoryActive,
	setPhysicalCategoryActive,
	setStomachCategoryActive,
	setMindCategoryActive,
} from "../slices/category-slice.js";

// importing helper functions
import {
	responsiveHeight,
	percentageCalculation,
} from "../services/dimensions";

const Category = ({ marginTop }) => {
	const dispatch = useDispatch();

	const dentistCategoryActive = useSelector(selectDentistCategoryActive);
	const physicalCategoryActive = useSelector(selectPhysicalCategoryActive);
	const stomachCategoryActive = useSelector(selectStomachCategoryActive);
	const mindCategoryActive = useSelector(selectMindCategoryActive);

	const handleCategoryChange = (category) => {
		switch (category) {
			case "dentist":
				dispatch(setDentistCategoryActive(true));
				break;
			case "physical":
				dispatch(setPhysicalCategoryActive(true));
				break;
			case "stomach":
				dispatch(setStomachCategoryActive(true));
				break;
			case "mind":
				dispatch(setMindCategoryActive(true));
				break;
		}
	};

	return (
		<CategoryContainer style={{ marginTop }}>
			<TitleContainer>
				<Text style={{ fontSize: 22, fontWeight: 700 }}>Category</Text>
			</TitleContainer>
			<CategoriesListContainer>
				<CategoryItem onPress={() => handleCategoryChange("dentist")}>
					<CategoryItemImageContainer
						style={[
							styles.boxShadow,
							dentistCategoryActive && styles.categorySelected,
						]}>
						<CategoryItemImage
							style={{ resizeMode: "contain" }}
							source={require("../../assets/dentist_category_image.png")}
						/>
					</CategoryItemImageContainer>
					<CategoryItemName>Dentist</CategoryItemName>
				</CategoryItem>
				<CategoryItem onPress={() => handleCategoryChange("physical")}>
					<CategoryItemImageContainer
						style={[
							styles.boxShadow,
							physicalCategoryActive && styles.categorySelected,
						]}>
						<CategoryItemImage
							style={{ resizeMode: "contain" }}
							source={require("../../assets/physical_category_image.png")}
						/>
					</CategoryItemImageContainer>
					<CategoryItemName>Physical</CategoryItemName>
				</CategoryItem>
				<CategoryItem onPress={() => handleCategoryChange("stomach")}>
					<CategoryItemImageContainer
						style={[
							styles.boxShadow,
							stomachCategoryActive && styles.categorySelected,
						]}>
						<CategoryItemImage
							style={{ resizeMode: "contain" }}
							source={require("../../assets/stomach_category_image.png")}
						/>
					</CategoryItemImageContainer>
					<CategoryItemName>Stomach</CategoryItemName>
				</CategoryItem>
				<CategoryItem onPress={() => handleCategoryChange("mind")}>
					<CategoryItemImageContainer
						style={[
							styles.boxShadow,
							mindCategoryActive && styles.categorySelected,
						]}>
						<CategoryItemImage
							style={{ resizeMode: "contain" }}
							source={require("../../assets/mind_category_image.png")}
						/>
					</CategoryItemImageContainer>
					<CategoryItemName>Mind</CategoryItemName>
				</CategoryItem>
			</CategoriesListContainer>
		</CategoryContainer>
	);
};

export default Category;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	categorySelected: {
		borderColor: "#66dae0",
		borderWidth: 2.5,
	},
});

const CategoryContainer = styled.View`
	width: ${percentageCalculation(350, 115)}px;
	height: ${responsiveHeight(17)}px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const TitleContainer = styled.View`
	width: 100%;
	height: 15%;
	padding-left: 10px;
	text-align: left;
`;

const CategoriesListContainer = styled.View`
	width: 100%;
	height: 70%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const CategoryItem = styled.TouchableOpacity`
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const CategoryItemImageContainer = styled.View`
	width: ${responsiveHeight(8)}px;
	height: 70%;
	background-color: white;
	border-radius: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CategoryItemImage = styled.Image`
	width: 95%;
	height: 95%;
`;

const CategoryItemName = styled.Text`
	font-size: 18px;
	font-weight: 600;
	color: black;
`;
