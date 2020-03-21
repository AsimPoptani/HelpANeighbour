import React from 'react'
// Import pages
import AddItemScreen from './screens/AddItemScreen'
import ForgottenPasswordScreen from './screens/ForgottenPasswordScreen'
import LoginPageScreen from './screens/LoginPageScreen'
import OfferingsScreen from './screens/OfferingsScreen'
import Splashscreen from './screens/Splashscreen'
import YourOfferingsScreen from './screens/YourOfferingsScreen'
// Setup navigation
import { createStackNavigator } from '@react-navigation/stack';

// Main stack
const HomeStack = createStackNavigator()

App = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Splashscreen" component={Splashscreen}/>
            <HomeStack.Screen name="ForgottenPasswordScreen" component={ForgottenPasswordScreen}/>
            <HomeStack.Screen name="AddItemScreen" component={AddItemScreen}/>
            <HomeStack.Screen name="YourOfferingsScreen" component={YourOfferingsScreen}/>
            <HomeStack.Screen name="OfferingsScreen" component={OfferingsScreen}/>
            <HomeStack.Screen name="LoginPageScreen" component={LoginPageScreen}/>
        </HomeStack.Navigator>
    )
}