import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { Button  } from 'react-native-paper';

import styled from 'styled-components/native';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const Container = styled(View)`
    display: flex;
    min-height: 100%;
    background-color: #222222;
    `
const Dice = styled(View)`
    top: 100px;
    justify-content: center;
    align-items: center;
`
const Welcome = styled(View)`
    position: absolute;
    width: 270px;
    height: 36px;
    align-self: center;
    top: 300px;
`
const WelcomeText = styled(Text)`
    font-family: 'Inter-Black';
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    text-align: center;
    color: #0078E7;
`
const AmazingText = styled(Text)`
    font-family: 'Inter-Black';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #F8F8F8;
    width: 271px;
    height: 60px;
    padding-top: 15px;
`
const ActionBtn = styled(View)`
    position: absolute;
    top: 555px;
    display: flex;
    flex-direction: row;
    align-self: center;
`
const LogInBtn = styled(Button)`
    width: 145px;
    height: 61px;
    background: #2DB357;
    color: #F8F8F8;
    font-family: 'Inter-Black';
    font-style: normal;
    font-weight: 600;
    border-radius: 6px;
    justify-content: center;
`
const LogInText = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #E5E5E5;
    text-transform: capitalize;
    text-align: center;
`
const SignUpBtn = styled(Button)`
    width: 145px;
    height: 61px;
    margin-left: 20px;
    background: #0078E7;
    color: #F8F8F8;
    font-family: 'Inter-Black';
    font-style: normal;
    font-weight: 600;
    border-radius: 6px;
    justify-content: center;
`
const PolicyText = styled(Text)`
    position: absolute;
    bottom: 7px;
    align-self: center;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #8B8B8B;
`
export const AccountScreen = ({navigation}) => {
    // const { setIsAuthenticated } = useContext(AuthenticationContext);
    return(
        <Container>
        <Dice>
            <Image source={require('../../../../assets/images/img15.png')}/>
        </Dice>
        <Welcome>
            <WelcomeText>Welcome Back</WelcomeText>
            <AmazingText>Amazing way to start the new earning again from start.</AmazingText>
        </Welcome>
        <ActionBtn>
            <LogInBtn onPress={ () => navigation.navigate('Login')}>
                <LogInText >Login</LogInText>
            </LogInBtn>
            <SignUpBtn onPress={() => navigation.navigate('SignUp')}>
                <LogInText>Sign up</LogInText>
            </SignUpBtn>
        </ActionBtn>
        <PolicyText>Read Privacy Policy</PolicyText>
    </Container>
    )
}