import React, {useState} from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { TextInput, Button  } from 'react-native-paper';


const ShadowContainer = styled(View)`
    
`
const SignUpContainer = styled(View)`
    background-color: #111111;
    width: 294px;
    height: 320px;
    align-self: center;
    elevation: 5;
    border-radius: 12px
`
const ChangePassword = styled(View)`
    display: flex;
    flex-direction: row;
`
const Lock = styled(Text)`
    color: #0078E6;
    font-family: Inter-Black;
    padding: 15px;
`
const Title = styled(Text)`
    color: #0078E6;
    font-family: Inter-Black;
    padding: 15px;
`
const Close = styled(Text)`
    color: #C6C6C6;
    font-family: Inter-Black;
    padding: 15px;
`
const FormInput = styled(Text)`
    font-family: Inter-ExtraBold;
    color: #C6C6C6;
    font-size: 9px;
    font-weight: 500;
    padding-left: 33px;
`
const Password = styled(Text)`
    font-family: Inter-ExtraBold;
    color: #C6C6C6;
    font-size: 9px;
    font-weight: 500;
    padding-left: 33px;
`
const SubmitBtn = styled(Button)`
    margin: 20px;
    height: 41px;
    width: 239px;
    background-color: #0078E6;
    color: "#FFFFFF";
    border: 1px solid #545454;
    border-radius: 2px;
    elevation: 5;
`
const AlertScreeen = ({navigation}) => {
    return (
        <ShadowContainer>
            <SignUpContainer>
                <ChangePassword>
                    <Lock><Icon name='alert-circle-outline' color="#0078E6"/></Lock>
                    <Title>Alert</Title>
                </ChangePassword>
                <FormInput>
                    You are not eligible to withdraw fund or please verify your email
                </FormInput>
                <SubmitBtn onPress ={() => navigation.navigate('Account')}>
                    ok
                </SubmitBtn>
            </SignUpContainer>
        </ShadowContainer>
        
    )
};

export default AlertScreeen;