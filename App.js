import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';
import LoginScreen from './src/features/account/screens/login.screen';
import { SplashScreen } from './src/features/splashscreen/splashscreen.screen';
import { AccountNavigator } from './src/infrastructure/navigation/account.navigator';
import { StatusBarStyles } from './src/components/statusbar.component';
import { HomeBlackScreen } from './src/features/home/homescreens/homeblack.screen';
import EditProfileScreeen from './src/features/account/screens/editprofile.screen';
import { ModalProvider } from './src/components/utility/modalcontext';
import { HomeLightResults } from './src/features/home/homescreens/homelight/homelight.results.screens';
import { TeamplayhomeLight } from './src/features/teamplay/teamplayhomelight.screen';
import { HourlyplayhomeBlack } from './src/features/hourly/hourlyplayhomeblack.screen';
import { LuckyNumber } from './src/components/luckynumber.component';
import { Participant } from './src/components/totalparticipant.component';
import { HomelightParticipant } from './src/features/home/homescreens/homelight/homelight.participants.screen';
import { Gamerules } from './src/components/gamerules.component';
import { ResultsProvider } from './src/components/utility/resultscontext';
import { CongratulationsResult } from './src/components/congratulationsresult';
import { SignUpScreen } from './src/features/account/screens/signup.screen';
import MakeItRain from './src/components/animated.rain.component';

export default function App() {
  const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 :10;
  return (
    < >
    <ThemeProvider theme={theme}>
      <ModalProvider>
          <ResultsProvider>
             <AuthenticationContextProvider>
              <Navigation/>
              </AuthenticationContextProvider> 
          {/* <AppNavigator/> */}
          {/* <AccountNavigator/> */}
            {/* <LoginScreen/> */}
          {/* <SplashScreen/> */}
          {/* <HomeBlackScreen/> */}
          {/* <EditProfileScreeen/> */}
          {/* <TeamplayhomeLight/> */}
          {/* <HomeLightResults/> */}
          {/* <HourlyplayhomeBlack/> */}
          {/* <LuckyNumber/> */}
          {/* <Participant/> */}
          {/* <HomelightParticipant/> */}
          {/* <Gamerules/> */}
          {/* <CongratulationsResult/> */}
          {/* <Navigation/> */}
          {/* <SignUpScreen/> */}
          <StatusBar barStyle="light-content" animated={true} backgroundColor="#162252"/>
          </ResultsProvider>
      </ModalProvider>
    </ThemeProvider>
    
    </>
  );
}

