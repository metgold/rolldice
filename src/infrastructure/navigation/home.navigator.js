import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeBlackScreen } from '../../features/home/homescreens/homeblack.screen';
import { HourlyplayhomeLight } from '../../features/hourly/hourlyplayhomelight.screen';
import { TeamplayhomeLight } from '../../features/teamplay/teamplayhomelight.screen';
import { HourlyplayhomeBlack } from '../../features/hourly/hourlyplayhomeblack.screen';
import { TeamPlayScreen } from '../../features/teamplay/teamplay.screen';
import { HomeLightResults } from '../../features/home/homescreens/homelight/homelight.results.screens';

const HomeStack = createNativeStackNavigator();
export const HomeNavigator = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeBlackScreen} options={{header: () => null}} />
            <HomeStack.Screen name="Hourly" component={HourlyplayhomeLight} options={{header: () => null}} />
            <HomeStack.Screen name="Team" component={TeamplayhomeLight} options={{header: () => null}} />
            <HomeStack.Screen name="Hourlyroll" component={HourlyplayhomeBlack} options={{header: () => null}} />
            <HomeStack.Screen name="Teamplayroll" component={TeamPlayScreen} options={{header: () => null}} />
            <HomeStack.Screen name="Resultsview" component={HomeLightResults} options={{header: () => null}} />
        </HomeStack.Navigator>
    )
    
}