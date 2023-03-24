import { StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

// importing states and actions
import { selectApptDate, setApptDate } from "../slices/common-slice";

var daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const DatesComponent = () => {
	const dispatch = useDispatch();

	const apptDate = useSelector(selectApptDate);
	const [daysInMonth, setDaysInMonth] = useState([]);
	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: "Asia/Dubai",
	});

	useEffect(() => {
		getNextFiveDays(new window.Date());
	}, []);

	const getNextFiveDays = (date) => {
		const daysInMonth = new window.Date(
			date.getFullYear(),
			date.getMonth() + 1,
			0
		).getDate();
		const remainingDays = [];

		for (let i = date.getDate(); i <= daysInMonth; i++) {
			const remainingDate = new window.Date(
				date.getFullYear(),
				date.getMonth(),
				i
			);
			remainingDays.push(remainingDate);
		}

		setDaysInMonth(remainingDays);
	};

	return (
		<DateContainer>
			<HeaderContainer>
				<Text style={{ fontSize: 18, fontWeight: 600 }}>Appointment</Text>
			</HeaderContainer>

			<DatesListContainer horizontal showsHorizontalScrollIndicator={false}>
				{daysInMonth.length !== 0 &&
					daysInMonth.map((day) => {
						return (
							<Date
								key={day.toString()}
								style={[
									styles.boxShadow,
									apptDate === day.toISOString() && styles.selected,
								]}
								onPress={() => {
									if (apptDate !== day.toISOString())
										dispatch(setApptDate(day.toISOString()));
									else dispatch(setApptDate(""));
								}}>
								<Text
									style={{
										fontSize: 24,
										fontWeight: 500,
										color:
											apptDate === day.toISOString()
												? "white"
												: "black",
									}}>
									{day.getDate()}
								</Text>
								<Text
									style={{
										fontSize: 16,
										fontWeight: 500,
										color:
											apptDate === day.toISOString()
												? "white"
												: "#777",
									}}>
									{daysOfWeek[day.getDay()].slice(0, 3)}
								</Text>
							</Date>
						);
					})}
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
	selected: {
		backgroundColor: "#7234f8",
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

const DatesListContainer = styled.ScrollView`
	width: 100%;
	height: 67%;
	padding-top: 7px;
	padding-bottom: 7px;
`;

const Date = styled.TouchableOpacity`
	width: 55px;
	height: 100%;
	margin-right: 25px;
	background-color: white;
	border-radius: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

// && (
// 						<>
// 							<Date style={styles.boxShadow}>
// 								<Text
// 									style={{
// 										fontSize: 19,
// 										fontWeight: 500,
// 										color: "black",
// 									}}>
// 									21
// 								</Text>
// 								<Text
// 									style={{
// 										fontSize: 16,
// 										fontWeight: 500,
// 										color: "#777",
// 									}}>
// 									Sun
// 								</Text>
// 							</Date>
// 							<Date style={styles.boxShadow}>
// 								<Text
// 									style={{
// 										fontSize: 19,
// 										fontWeight: 500,
// 										color: "black",
// 									}}>
// 									22
// 								</Text>
// 								<Text
// 									style={{
// 										fontSize: 16,
// 										fontWeight: 500,
// 										color: "#777",
// 									}}>
// 									Mon
// 								</Text>
// 							</Date>
// 							<Date
// 								style={[
// 									styles.boxShadow,
// 									{ backgroundColor:  },
// 								]}>
// 								<Text
// 									style={{
// 										fontSize: 19,
// 										fontWeight: 500,
// 										color: "white",
// 									}}>
// 									23
// 								</Text>
// 								<Text
// 									style={{
// 										fontSize: 16,
// 										fontWeight: 500,
// 										color: "white",
// 									}}>
// 									Tue
// 								</Text>
// 							</Date>
// 							<Date style={styles.boxShadow}>
// 								<Text
// 									style={{
// 										fontSize: 19,
// 										fontWeight: 500,
// 										color: "black",
// 									}}>
// 									24
// 								</Text>
// 								<Text
// 									style={{
// 										fontSize: 16,
// 										fontWeight: 500,
// 										color: "#777",
// 									}}>
// 									Wed
// 								</Text>
// 							</Date>
// 							<Date style={styles.boxShadow}>
// 								<Text
// 									style={{
// 										fontSize: 19,
// 										fontWeight: 500,
// 										color: "black",
// 									}}>
// 									25
// 								</Text>
// 								<Text
// 									style={{
// 										fontSize: 16,
// 										fontWeight: 500,
// 										color: "#777",
// 									}}>
// 									Thu
// 								</Text>
// 							</Date>
// 						</>
