import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const PaperPlaneIcon = ({ color, size, marginTop = 0, marginLeft = 0 }) => {
	return (
		<Icon
			name="paper-plane"
			size={size}
			color={color}
			style={{ marginTop, marginLeft }}
		/>
	);
};

export default PaperPlaneIcon;
