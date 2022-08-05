import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator, LoginNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import LoginScreen from "../../features/account/screens/login.screen";
import { HomeNavigator } from "./home.navigator";

export const Navigation = () => {
    const { isAuthenticated, Account } = useContext(AuthenticationContext);
   return( 
            <>
                <NavigationContainer>
                    { isAuthenticated ?  <AppNavigator/> : (Account ? <LoginNavigator/> : <AccountNavigator/>  )  } 
                </NavigationContainer>
            </>
    )  
};
 