import React from 'react'
// Import pages
import AddItemScreen from './screens/AddItemScreen'
import ForgottenPasswordScreen from './screens/ForgottenPasswordScreen'
import LoginPageScreen from './screens/LoginPageScreen'
import OfferingsScreen from './screens/OfferingsScreen'
import Splashscreen from './screens/SplashScreen'
import YourOfferingsScreen from './screens/YourOfferingsScreen'
import RegisterAndLoginPageScreen from './screens/RegisterAndLoginPageScreen'
// Setup navigation
import { createStackNavigator } from '@react-navigation/stack';

// Main stack
const HomeStack = createStackNavigator()

// All of our pages
App = () => {
    return(
        // Disable header mode
        <HomeStack.Navigator headerMode='none'>
            <HomeStack.Screen name="Splashscreen" component={Splashscreen}/>
            <HomeStack.Screen name="ForgottenPasswordScreen" component={ForgottenPasswordScreen}/>
            <HomeStack.Screen name="AddItemScreen" component={AddItemScreen}/>
            <HomeStack.Screen name="YourOfferingsScreen" component={YourOfferingsScreen}/>
            <HomeStack.Screen name="OfferingsScreen" component={OfferingsScreen}/>
            <HomeStack.Screen name="LoginPageScreen" component={LoginPageScreen}/>
            <HomeStack.Screen name="RegisterAndLoginPageScreen" component={RegisterAndLoginPageScreen}/>
        </HomeStack.Navigator>
    )
}

export default App