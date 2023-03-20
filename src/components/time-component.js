import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

const TimeComponent = () => {
	return (
		<TimeContainer>
			<HeaderContainer>
				<Text style={{ fontSize: 18, fontWeight: 600 }}>Schedule</Text>
			</HeaderContainer>

			<TimeListContainer>
				<Time style={styles.boxShadow}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "black",
						}}>
						09:00 AM
					</Text>
				</Time>
				<Time style={[styles.boxShadow, { backgroundColor: "#7234f8" }]}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "white",
						}}>
						11:00 AM
					</Text>
				</Time>
				<Time style={styles.boxShadow}>
					<Text
						style={{
							fontSize: 19,
							fontWeight: 500,
							color: "black",
						}}>
						05:00 PM
					</Text>
				</Time>
			</TimeListContainer>
		</TimeContainer>
	);
};

export default TimeComponent;

const styles = StyleSheet.create({
	boxShadow: {
		shadowColor: "#171717",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
});

const TimeContainer = styled.View`
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

const TimeListContainer = styled.View`
	width: 100%;
	height: 67%;
	padding-top: 5px;
	padding-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
`;

const Time = styled.TouchableOpacity`
	width: 27%;
	height: 60%;
	background-color: white;
	border-radius: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
