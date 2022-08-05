import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeBlackScreen } from '../../features/home/homescreens/homeblack.screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { AccountNavigator } from './account.navigator';
import { HomeNavigator } from './home.navigator';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

const Tab = createBottomTabNavigator();
const People = () => {<Text>Hello People</Text>};
const Team = () => {<Text>Hello Team </Text>};

export const AppNavigator = () => {
    const { setAccount } = useContext(AuthenticationContext);
   return(
    <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                iconName = 'home'
                } else if (route.name === 'TeamPlay') {
                iconName = 'account-group'
                } else if (route.name === 'People'){
                iconName = 'account'
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#0078E6',
            tabBarInactiveTintColor: '#6C6C6C',
            tabBarStyle: {
                height: 50,
                paddingHorizontal: 5,
                paddingTop: 0,
                backgroundColor: '#222222',
                position: 'absolute',
                borderTopWidth: 0,
            },
            })}
        >

            <Tab.Screen name="Home" component={HomeNavigator} options={{header: () => null}} />
            <Tab.Screen name="TeamPlay" component={Team} options={{header: () => null}}/>
            <Tab.Screen name="People" component={People} options={{header: () => null}}/>
        </Tab.Navigator>
   )    
    
}