import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

const DatesComponent = () => {
	return (
		<DateContainer>
			<HeaderContainer>
				<Text style={{ fontSize: 18, fontWeight: 600 }}>Appointment</Text>
			</HeaderContainer>

			<DatesListContainer>
				<Date style={styles.boxShadow}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "black",
						}}>
						21
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 500,
							color: "#777",
						}}>
						Sun
					</Text>
				</Date>
				<Date style={styles.boxShadow}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "black",
						}}>
						22
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 500,
							color: "#777",
						}}>
						Mon
					</Text>
				</Date>
				<Date style={[styles.boxShadow, { backgroundColor: "#7234f8" }]}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "white",
						}}>
						23
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 500,
							color: "white",
						}}>
						Tue
					</Text>
				</Date>
				<Date style={styles.boxShadow}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "black",
						}}>
						24
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 500,
							color: "#777",
						}}>
						Wed
					</Text>
				</Date>
				<Date style={styles.boxShadow}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "black",
						}}>
						25
					</Text>
					<Text
						style={{
							fontSize: 16,
							fontWeight: 500,
							color: "#777",
						}}>
						Thu
					</Text>
				</Date>
			</DatesListContainer>
		</DateContainer>
	);
};

export default DatesComponent;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const DateContainer = styled.View`
	width: 100%;
	height: 45%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const HeaderContainer = styled.View`
	width: 100%;
	height: 30%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const DatesListContainer = styled.View`
	width: 100%;
	height: 67%;
	padding-top: 5px;
	padding-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Date = styled.TouchableOpacity`
	width: 14%;
	height: 100%;
	background-color: white;
	border-radius: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
