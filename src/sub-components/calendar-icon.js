import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const CalendarIcon = ({ color, size, marginTop = 0 }) => {
	return (
		<Icon name="calendar" size={size} color={color} style={{ marginTop }} />
	);
};

export default CalendarIcon;
