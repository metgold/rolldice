import React from 'react';
import { AccountScreen } from '../../features/account/screens/account.screen';
import { SignUpScreen } from '../../features/account/screens/signup.screen';
import ForgotPasswordScreeen from '../../features/account/screens/forgotpassword.screen';
import {LoginScreen} from "../../features/account/screens/login.screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeBlackScreen } from '../../features/home/homescreens/homeblack.screen';
import EditProfileScreeen from '../../features/account/screens/editprofile.screen';
import { HourlyplayhomeLight } from '../../features/hourly/hourlyplayhomelight.screen';
import { SplashScreen } from '../../features/splashscreen/splashscreen.screen';

const AccountStack = createNativeStackNavigator();
export const AccountNavigator = () => {
    return(
        <AccountStack.Navigator initialRouteName="Splash">
            <AccountStack.Screen name="Splash" component={SplashScreen} options={{header: () => null}}/>
            <AccountStack.Screen name="Account" component={AccountScreen} options={{header: () => null}} />
            
             <AccountStack.Screen name="ForgotPassword" component={ForgotPasswordScreeen} options={{header: () => null}} />
            <AccountStack.Screen name="SignUp" component={SignUpScreen} options={{header: () => null}} />
            <AccountStack.Screen name="Login" component={LoginScreen} options={{header: () => null}}/>
        </AccountStack.Navigator>
    )
    
}

const LoginStack = createNativeStackNavigator();
export const LoginNavigator = () => {
    return(
        <LoginStack.Navigator >
            <LoginStack.Screen name="Login1" component={LoginScreen} options={{header: () => null}}/>
             <LoginStack.Screen name="ForgotPassword1" component={ForgotPasswordScreeen} options={{header: () => null}} />
            <LoginStack.Screen name="SignUp1" component={SignUpScreen} options={{header: () => null}} />
        </LoginStack.Navigator>
    )
    
}