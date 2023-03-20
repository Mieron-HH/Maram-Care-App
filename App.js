import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "./src/store";

// importing screens
import OnboardingScreen from "./src/screens/onboarding-screen";
import LoginScreen from "./src/screens/login-screen";
import SignupScreen from "./src/screens/signup-screen";
import SearchProviderScreen from "./src/screens/search-provider-screen";
import HomeScreen from "./src/screens/home-screen";
import AppointmentScreen from "./src/screens/appointment-screen";
import PaymentPlanScreen from "./src/screens/payment-plan-screen";
import PaymentMethodScreen from "./src/screens/payment-method-screen";
import VideoCallScreen from "./src/screens/video-call-screen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="VideoCallScreen"
					screenOptions={{
						headerShown: false,
					}}>
					<Stack.Screen
						name="OnboardingScreen"
						component={OnboardingScreen}
					/>
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen name="SignupScreen" component={SignupScreen} />
					<Stack.Screen
						name="SearchProviderScreen"
						component={SearchProviderScreen}
					/>
					<Stack.Screen name="HomeScreen" component={HomeScreen} />
					<Stack.Screen
						name="AppointmentScreen"
						component={AppointmentScreen}
					/>
					<Stack.Screen
						name="PaymentPlanScreen"
						component={PaymentPlanScreen}
					/>
					<Stack.Screen
						name="PaymentMethodScreen"
						component={PaymentMethodScreen}
					/>
					<Stack.Screen
						name="VideoCallScreen"
						component={VideoCallScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
