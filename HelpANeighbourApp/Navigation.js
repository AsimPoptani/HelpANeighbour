import React from 'react'
// Import pages
import AddItemScreen from './screens/AddItemScreen'
import ForgottenPasswordScreen from './screens/ForgottenPasswordScreen'
import LoginPageScreen from './screens/LoginPageScreen'
import OfferingsScreen from './screens/OfferingsScreen'
import Splashscreen from './screens/SplashScreen'
import YourOfferingsScreen from './screens/YourOfferingsScreen'
import RegisterAndLoginPageScreen from './screens/RegisterAndLoginPageScreen'
import RegisterPageScreen from './screens/RegisterPageScreen'
// Setup navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Main stack
const HomeStack = createStackNavigator()
// Tab navigation
const Tab = createBottomTabNavigator();

TabNavigation  = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="YourOfferingsScreen" component={YourOfferingsScreen}/>
            <Tab.Screen name="OfferingsScreen" component={OfferingsScreen}/>
        </Tab.Navigator>
    )
}
// All of our pages
App = () => {
    return(
        // Disable header mode
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name="Splashscreen" component={Splashscreen}/>
            <HomeStack.Screen name="RegisterPageScreen" component={RegisterPageScreen}/>
            <HomeStack.Screen name="ForgottenPasswordScreen" component={ForgottenPasswordScreen}/>
            <HomeStack.Screen name="AddItemScreen" component={AddItemScreen}/>
            <HomeStack.Screen name="Home" component={TabNavigation}/>
            <HomeStack.Screen name="LoginPageScreen" component={LoginPageScreen}/>
            <HomeStack.Screen name="RegisterAndLoginPageScreen" component={RegisterAndLoginPageScreen}/>
        </HomeStack.Navigator>
    )
}

export default App