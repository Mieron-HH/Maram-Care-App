import { configureStore } from "@reduxjs/toolkit";

// importing slices
import OnboardingSlice from "./slices/onboarding-slice";
import SignupSlice from "./slices/signup-slice";
import SearchProviderSlice from "./slices/search-provider-slice";
import UserRegistrationSlice from "./slices/user-registration-slice";
import NavigationBarSlice from "./slices/navigation-bar-slice";
import CategorySlice from "./slices/category-slice";

export const store = configureStore({
	reducer: {
		Onboarding: OnboardingSlice,
		Signup: SignupSlice,
		SearchProvider: SearchProviderSlice,
		UserRegistration: UserRegistrationSlice,
		NavigationBar: NavigationBarSlice,
		Category: CategorySlice,
	},
});
