import { StyleSheet } from "react-native";
import { Svg, Polygon } from "react-native-svg";

const Triangle = ({ color }) => {
	return (
		<Svg style={styles.svg}>
			<Polygon points="0,0 14,0 7,14" fill={color} />
		</Svg>
	);
};

export default Triangle;

const styles = StyleSheet.create({
	svg: {
		width: 14,
		height: 14,
		position: "absolute",
		bottom: -14,
	},
});
