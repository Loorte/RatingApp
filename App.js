import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInShop from './screens/Authorization/SignIn/SignInShop';
import SignUpShop from './screens/Authorization/SignUp/SignUpShop';
import SignUpUser from './screens/Authorization/SignUp/SignUpUser';
import ForgotPassword from './screens/Authorization/ForgotPassword';
import CreatePassword from './screens/Authorization/CreatePassword';
import MainPage from './screens/Settings/MainPage';
import About from './screens/Settings/About';
import Code from './screens/Authorization/Code';
import Check from './screens/Check';
import Profile from './screens/Profile';
import Profile1 from './screens/Profile1';
import ProfileCompany from './screens/ProfileCompany';
import ProfileCompany1 from './screens/ProfileCompany1';
import MyCompany from './screens/MyCompany';
import Filters from './screens/Filters';
import Messages from './screens/Messages';
import Contacts from './screens/Contacts';
import ReviewVoice from './screens/ReviewVoice';
import Scan from './screens/Scan';
import EditProfile from './screens/EditProfile';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer style={{backgroundColor: '#5227D0'}}>
			<StatusBar barStyle="light-content" />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="SignInShop" component={SignInShop} />
				<Stack.Screen name="SignUpShop" component={SignUpShop} />
				<Stack.Screen name="SignUpUser" component={SignUpUser} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="CreatePassword" component={CreatePassword} />
				<Stack.Screen name="MainPage" component={MainPage} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="Code" component={Code} />
				<Stack.Screen name="Check" component={Check} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="Profile1" component={Profile1} />
				<Stack.Screen name="ProfileCompany" component={ProfileCompany} />
				<Stack.Screen name="ProfileCompany1" component={ProfileCompany1} />
				<Stack.Screen name="MyCompany" component={MyCompany} />
				<Stack.Screen name="Filters" component={Filters} />
				<Stack.Screen name="Messages" component={Messages} />
				<Stack.Screen name="Contacts" component={Contacts} />
				<Stack.Screen name="ReviewVoice" component={ReviewVoice} />
				<Stack.Screen name="Scan" component={Scan} />
				<Stack.Screen name="EditProfile" component={EditProfile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
